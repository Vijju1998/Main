import express, { Router, Request, Response } from 'express';
import checkJwt from '../middleware/checkjwt';
import Order, { IOrder } from '../entity/Order';
import User, { IUser } from '../entity/User';

import { check, validationResult } from 'express-validator';
const router = Router();
interface OrderFields {
  user: IOrder['_id'];
  Items: IOrder['Items'];
  order_total: IOrder['order_total'];
}

//@route        POST api/orders
//@description  post Order
//access        Private
router.post(
  '/',

  checkJwt,
  //check('address', 'Address is required').not().isEmpty(),
  // check('pincode', 'Pincode is required').not().isEmpty(),

  async (req: Request, res: Response) => {
    /* const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    */
    // destructure the request
    const { Items, order_total } = req.body;
    //Build profile Object
    const OrderFields: OrderFields = {
      user: req.user.id,
      Items: Items,
      order_total: order_total,
    };

    try {
      let add_order;
      add_order = new Order(OrderFields);
      await add_order.save();
      return res.json(add_order);
    } catch (error) {
      res.status(500).send('Send error');
    }
  }
);
//@route        GET api/order
//@description  Get orders based on userID
//access        Private
router.get('/', checkJwt, async (req: Request, res: Response) => {
  try {
    const orders = await Order.find({
      user: req.user.id,
    });
    //   ['name', 'email', 'phone']

    if (!orders) {
      return res
        .status(400)
        .json({ msg: 'No Orders, please order and view here' });
    }
    res.json(orders);
  } catch (error) {
    res.status(500).send('Server Error');
  }
});
export default router;
