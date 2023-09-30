import express, { Application, Request, Response, NextFunction } from 'express';
import crypto from 'crypto';
import dotenv from 'dotenv';
import config from 'config';
import bodyParser from 'body-parser';
import { connectdb } from './config/db';
import user from './routers/user';
import auth from './routers/auth';
import profile from './routers/profile';
import item from './routers/items';
import order from './routers/order';
const app: Application = express();

// let token =crypto.randomBytes(64).toString('hex');
// console.log(token)

const port = 3001;
dotenv.config();

//connect database
connectdb();

//Values inside the environoment variable
//console.log(process.env.ACCESS_TOKEN)

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api/user', user);
app.use('/api/auth', auth);
app.use('/api/profile', profile);
app.use('/api/item', item);
app.use('/api/order', order);

app.listen(port, () => {
  console.log('Server started on port 3000!');
});
