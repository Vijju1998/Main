import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import config from "config";
import dotenv from "dotenv";

dotenv.config();

const checkJwt = (req: Request, res: Response, next: NextFunction) => {
  //Get the jwt token from the head
  const token = <string>req.headers["x-auth-token"];;

  if(!token){
      return res.status(401).json({ msg: 'No token, authorization denied' });
  }
  
  //Try to validate the token and get data
  console.log(token)
  try {
    jwt.verify(token, process.env.ACCESS_TOKEN,(error,decoded)=>{
    if (error) {
        return res.status(401).json({ msg: 'Token is not valid' });
      } else {
        req.user = decoded.user;
        next();
      }
    });
    } catch (err) {
    console.error('something wrong with auth middleware');
    res.status(500).json({ msg: 'Server Error' });
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

export default checkJwt