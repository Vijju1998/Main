import mongoose, {Schema,Document} from 'mongoose';

interface IItems extends Document{
    item_name:string;
    item_image:string;
    description:string;
    price:number;
    quantity:number;
    food_types:{
        food_type:string;
    };
    category:{
        cat_type:string;
    };
}

const ItemSchema:Schema = new Schema({
    
    item_name : {
        type:String,
        required:true,
    },

    item_image : {
        type:String,
        required:true,
    },

    description : {
        type:String,
        required:true,
    },

    price : {
        type:Number,
        required:true,
    },

    quantity : {
        type:Number,
        required:true,
    },
    food_types : {
        food_type : {
            type:String,
        }
    },
    category : {
        cat_type : {
            type:String,
        }
    
}

});


export default mongoose.model<IItems>('Item',ItemSchema);



