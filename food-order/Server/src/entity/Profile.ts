import mongoose, { Schema, Document } from 'mongoose';
import { IUser } from './User';

export interface IProfile extends Document {
  user: IUser['_id'];
  address: string;
  pincode: number;
  profile_picture: string;
  date: Date;
}

const ProfileSchema: Schema = new Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
  },
  address: { type: String, required: true },
  pincode: { type: Number, required: true },
  profile_picture: { type: String },
  date: {
    type: Date,
    default: Date.now,
  },
});

// Export the model and return your IUser interface
export default mongoose.model<IProfile>('Profile', ProfileSchema);
