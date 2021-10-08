import express, { Router, Request, Response } from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import config from 'config';
import { check, validationResult } from 'express-validator';
import User from '../entity/User';
const router = Router();
dotenv.config();
const Secret = process.env.ACCESS_TOKEN as string;
router.post(
  '/',
  check('email', 'Please include a valid email').isEmail(),
  check(
    'password',
    'Please enter a password with 6 or more characters'
  ).isLength({ min: 6 }),
  check('phone', 'Please enter the valid number').isLength({ max: 10 }),
  async (req: Request, res: Response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { email, name, phone, password } = req.body;
    try {
      let user = await User.findOne({ email: email.toLowerCase() });

      if (user) {
        return res
          .status(400)
          .json({ errors: [{ msg: 'User already exists' }] });
      }
      user = new User({
        email,
        name,
        phone,
        password,
      });
      const salt = await bcrypt.genSalt(10);

      user.password = await bcrypt.hash(password, salt);
      user.email = email.toLowerCase();
      await user.save();

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
);

export default router;
