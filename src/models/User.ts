import mongoose from 'mongoose';

export interface IUser extends mongoose.Document {
    name: string;
    enterpriseName: string;
    address: string;
    city: string;
    state: string;
    zipCode: string;
    email: string;
    telefone: string;
    password: string;
    search: number;
    countLogin: number;
    lastLogin: Date;
    active: string;
}

const UserSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    enterpriseName:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    city:{
        type:String,
        required:true
    },
    state:{
        type:String,
        required:true
    },
    zipCode:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique: true
    },
    telefone: {
        type: Number,
        required: true
    },
    password:{
        type: String,
        required:true
    },
    search:{
        type: Number,
        required:false
    },
    countLogin:{
        type: Number,
        required:false
    },
    lastLogin: {
        type: Date,
        required:false
    },
    active:{
        type: String,
        default: "A"
    }
});

const User = mongoose.model<IUser>("User", UserSchema);

export default User;