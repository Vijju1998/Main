const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const User = require('../../models/User');
const jwt = require('jsonwebtoken');
const config = require('config');
//@route        POST api/users
//@description  Register User
//access        public[No auth required]
router.post(
  '/',
  [
    check('name', 'Name is required').not().isEmpty(),
    check('email', 'Please include a valid email').isEmail(),
    check(
      'password',
      'Please enter a password with 6 or more characters'
    ).isLength({ min: 6 }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { name, email, password } = req.body;
    try {
      //See if user exists
      let user = await User.findOne({ email: email.toLowerCase() });
      if (user) {
        return res
          .status(400)
          .json({ errors: [{ msg: 'User already exists' }] });
      }
      //Get user's gravitar
      /*let avatar = gravatar.url(email, {
        s: '200',
        r: 'pg',
        d: 'mm',
      });
      */

      user = new User({
        name,
        email,
        password,
      });

      //Encrypt password

      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(password, salt);

      //Convert email into lowercase
      user.email = email.toLowerCase();
      await user.save();
      //Return jsonwebtoken
      const payload = {
        user: {
          id: user.id,
        },
      };
      jwt.sign(
        payload,
        config.get('jwtSecret'),
        { expiresIn: 360000 },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );
      //res.send('User registered');
    } catch (error) {
      console.log(error.message);
      res.status(500).send('Server errror');
    }
  }
);

module.exports = router;
