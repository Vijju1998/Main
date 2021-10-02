import express from "express";
import mongoose from "mongoose";
import config from "config";
import dotenv from "dotenv";

dotenv.config();

const db=process.env.MONGO_DB as string ;

export const connectdb = async () : Promise<void> => {
  try {
    await mongoose.connect(db);
    console.log('Mongo DB Connected successfully');
  } catch (error) {
    console.error(error);
    process.exit(1);
  }

};

