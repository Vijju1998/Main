import express,{Router,Request, Response} from "express";
import bcrypt from "bcrypt";
import checkJwt from '../middleware/checkjwt';
import jwt from "jsonwebtoken";
import dotenv from 'dotenv';
import config from 'config';
import User from "../entity/users/User";
import { check, validationResult } from 'express-validator';

dotenv.config();

const router=Router();

router.get('/', checkJwt, async (req:Request, res:Response) => {
 
  try {
    const user = await User.findById(req.user.id).select('-confirm_password');
    res.json(user);
  } catch (err) {
  
    res.status(500).send('Server Error');
  }
});

router.post(
  '/',
  check('email', 'Please include a valid email').isEmail(),
  check('password', 'Password is required').exists(),
  async (req:Request, res:Response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;

    try {
      let user = await User.findOne({ email });

      if (!user) {
        return res
          .status(400)
          .json({ errors: [{ msg: 'Invalid Credentials' }] });
      }

      const isMatch = await bcrypt.compare(password, user.password);

      if (!isMatch) {
        return res
          .status(400)
          .json({ errors: [{ msg: 'Invalid Credentials' }] });
      }

      const payload = {
        user: {
          id: user.id
        }
      };

      jwt.sign(
        payload,
        config.get('jwtSecret'),
        { expiresIn: '5 days' },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );
    } catch (err) {
      
      res.status(500).send('Server error');
    }
  }
);
export default router;