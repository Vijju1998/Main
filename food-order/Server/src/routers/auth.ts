import express, { Router, Request, Response } from 'express';
import bcrypt from 'bcrypt';
import checkJwt from '../middleware/checkjwt';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import config from 'config';
import User from '../entity/User';
import { check, validationResult } from 'express-validator';
import AdminRole from "../entity/AdminRole"


dotenv.config();
const Secret = process.env.ACCESS_TOKEN as string;

const router = Router();

router.get('/', checkJwt, async (req: any, res: Response) => {
  try {
    const user = await User.findById(req.user.id).select('-password');
    res.json(user);
  } catch (err) {
    res.status(500).send('Server Error');
  }
});

router.post(
  '/',
  check('email', 'Please include a valid email').isEmail(),
  check(
    'password',
    'Please enter a password with 6 or more characters'
  ).isLength({ min: 6 }),
  async (req: Request, res: Response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;
    
/*
{"email":"ramukaka@gmail.com",
    
    "password":"12345678"}*/

//
if(await AdminRole.findOne({ email: email.toLowerCase()})){
let admin = await AdminRole.find({email:email.toLowerCase(),password:password});
if(admin.length == 0){
  return res.send("Invalid Admin")
}else{
const payload = {
  admin : {
    id:admin[0].id
  }
}
jwt.sign(payload, Secret, { expiresIn: '5 days' }, (err, token) => {
        if (err) throw err;
        res.json({ 
          id:admin[0].id,
          email:admin[0].email,
          password:admin[0].password,
          accessToken:token });
      });
}
}else{

    try {
      
      let user = await User.findOne({ email: email.toLowerCase() });

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
          id: user.id,
        },
      };

      jwt.sign(payload, Secret, { expiresIn: '5 days' }, (err, token) => {
        if (err) throw err;
        res.json({ token });
      });
    } catch (err) {
      res.status(500).send('Server error');
    }
}
  }
);
export default router;
