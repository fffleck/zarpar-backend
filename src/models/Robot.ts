import mongoose from 'mongoose';

// Document interface
export interface IRobot extends mongoose.Document {
    porto_origem: string;
    porto_origem_country: string;
    porto_destino: string;
    porto_destino_country: string;
    mercadoria: string;
    qtd_container: number;
    type_container: string;
    peso_container: string;
    data_embarque: string;
    user: string;
    password: string;
  }

const RobotSchema = new mongoose.Schema({
    porto_origem:{
        type:String,
        required:true,
    },
    porto_origem_country:{
      type:String,
      required:true,
    },
    porto_destino:{
        type:String,
        required:true
    },
    porto_destino_country:{
      type:String,
      required:true
    },
    mercadoria:{
      type:String,
      required:true,
      default: 'SPOT'
    },
    qtd_container:{
      type: Number,
      required:true
    },
    type_container:{
      type: String,
      required:true,
    },
    peso_container:{
      type: String,
      required:true,
    },
    data_embarque:{
      type: String,
      required:true,
    },
    user:{
      type: String,
      required:true,
    },
    password:{
      type: String,
      required:true,
    }
});

const Robot = mongoose.model<IRobot>("Robot", RobotSchema);

export default Robot;