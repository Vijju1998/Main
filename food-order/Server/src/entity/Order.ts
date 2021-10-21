import mongoose, { Schema, Document } from 'mongoose';
import { IUser } from './User';
import { IItems } from './Items';

export interface IOrder extends Document {
  user: IUser['_id'];
  Items: {
    item: IItems['_id'];
    quantity: number;
    special_request: string;
  };
  order_total: number;
  date: Date;
}

const OrderSchema: Schema = new Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
  },
  Items: [
    {
      item: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Item',
      },
      quantity: { type: Number, required: true },
      special_request: { type: String },
    },
  ],
  order_total: { type: Number, required: true },
  date: {
    type: Date,
    default: Date.now,
  },
});

// Export the model and return your IUser interface
export default mongoose.model<IOrder>('Order', OrderSchema);
