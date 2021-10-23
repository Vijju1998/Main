import mongoose, {Schema,Document} from 'mongoose';

interface IAdminRole extends Document {
    email:string;
    password:string;
};


const AdminRoleSchema:Schema = new Schema({
    email : {
        type:String,
        required:true
    },
    password : {
        type:String,
        required:true
    }
});

export default mongoose.model<IAdminRole>('AdminRole',AdminRoleSchema);
