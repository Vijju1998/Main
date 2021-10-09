import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import config from 'config';
import dotenv from 'dotenv';
dotenv.config();
const Secret = process.env.ACCESS_TOKEN as string;
declare global {
  namespace Express {
    interface Request {
      user: { id: string };
    }
  }
}
const checkJwt = (req: Request, res: Response, next: NextFunction) => {
  //Get the jwt token from the head
  const token = <string>req.headers['x-auth-token'];

  if (!token) {
    return res.status(401).json({ msg: 'No token, authorization denied' });
  }

  //Try to validate the token and get data

  try {
    const decoded = <any>jwt.verify(token, Secret);
    req.user = decoded.user;

    next();
  } catch (err) {
    res.status(401).json({ msg: 'Token is not valid' });
  }

  //   //The token is valid for 1 hour
  //   //We want to send a new token on every request
  //   const { userId, username } = jwtPayload;
  //   const newToken = jwt.sign({ userId, username }, process.env.ACCESS_TOKEN, {
  //     expiresIn: "1h"
  //   });
  //   res.setHeader("token", newToken);

  //   //Call the next middleware or controller
  //   next();
};

export default checkJwt;
