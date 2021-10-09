import mongoose, { Schema, Document } from 'mongoose';

export interface IUser extends Document {
  email: string;
  name: string;
  phone: number;
  password: string;
  date: Date;
}

const UserSchema: Schema = new Schema({
  email: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  phone: { type: Number, required: true },
  password: { type: String, required: true },
  date: {
    type: Date,
    default: Date.now,
  },
});

// Export the model and return your IUser interface
export default mongoose.model<IUser>('User', UserSchema);
