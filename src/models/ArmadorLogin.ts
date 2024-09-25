import mongoose from 'mongoose';

// Document interface
export interface IArmadorLogin extends mongoose.Document {
    armador: string;
    user: string;
    password: string;
    email: string;
    status: boolean;
  }

const ArmadorLoginSchema = new mongoose.Schema({
    armador:{
        type:String,
        required:true,
        unique:true
    },
    user:{
        type:String,
        required:true
    },
    password:{
      type:String,
      required:true
    },
    email:{
      type:String,
      required:true
    },
    status:{
      type:Boolean,
      required:true,
      default: true,
    },
});

const ArmadorLogin = mongoose.model<IArmadorLogin>("ArmadorLogin", ArmadorLoginSchema);

export default ArmadorLogin;