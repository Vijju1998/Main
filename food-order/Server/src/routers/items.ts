import express, { Request, Response, NextFunction, Router } from "express";
// import { check} from 'express-validator';
import Item from "../entity/Items";

interface AddItemsType {
  item_name: string;
  item_image: string;
  description: string;
  price: number;
  quantity: number;
  food_types: {
    food_type: string;
  };
  category: {
    cat_type: string;
  };
}

const router = Router();

//post the items
router.post(
  "/",
  // check('item_name', 'Item name is required').not().isEmpty(),
  // check('price', ' price is required').not().isEmpty(),
  // check('quantity', 'Address is required').not().isEmpty(),

  async (req: Request, res: Response) => {
    const {
      item_name,
      item_image,
      description,
      price,
      quantity,
      food_types,
      category,
    } = req.body;
    console.log(quantity);

    const Items: AddItemsType = {
      item_name: item_name,
      item_image: item_image,
      description: description,
      price: price,
      quantity: quantity,
      food_types: {
        food_type: food_types.food_type,
      },
      category: {
        cat_type: category.cat_type,
      },
    };
    let add_item;
    add_item = new Item(Items);
    await add_item.save();
    return res.json(item_name);
  }
);

//Retrieve all the items
router.get("/", async (req: Request, res: Response) => {
  try {
    const items = await Item.find({});
    if (!items) {
      return res.status(400).json({ msg: "No items Found" });
    }
    res.json(items);
  } catch (error) {
    res.status(500).send("Server Error");
  }
});

//Delete the particular Items
router.delete("/:id", async (req: Request, res: Response) => {
  try {
    const id = req.params.id;

    if (!id) {
      return res.status(400).json({ msg: "No item is selected" });
    }
    await Item.findByIdAndRemove({ _id: id });
    res.json({ msg: "Item deleted" });
  } catch (error) {
    res.status(500).send("Server Error");
  }
});

//Update the particular Items
router.patch("/:id", async (req: Request, res: Response) => {
  const updateItems = req.body;
  const id = req.params.id;
  if (!(updateItems && id))
    return res.status(400).json({ msg: "cannot update" });
  await Item.updateOne({ _id: id }, { $set: updateItems });
  res.json({ msg: "Item Updated" });
});

export default router;
