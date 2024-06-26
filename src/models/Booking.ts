import mongoose from 'mongoose';

// Document interface
export interface Ibooking extends mongoose.Document {
    armador: string;
    data_embarque: string;
    embarcador_name: string;
    embarcador_email: string;
    tipo_mercadoria: string;
    porto_embarque: string;
    porto_descarga: string;
    quantidade_containers: string;
    tipo_containers: string;
    valor: string;
  }

const BookingSchema = new mongoose.Schema({
    armador:{
        type:String,
        required:true,
    },
    data_embarque:{
        type:String,
        required:true
    },
    embarcador_name:{
      type:String,
      required:true
    },
    embarcador_email:{
      type:String,
      required:true
    },
    tipo_mercadoria:{
      type:String,
      required:true
    },
    porto_embarque:{
      type:String,
      required:true
    },
    porto_descarga:{
      type:String,
      required:true
    },
    quantidade_containers:{
      type:String,
      required:true
    },
    tipo_containers:{
      type:String,
      required:true
    },
    valor:{
      type:String,
      required:true
    },
});

const Booking = mongoose.model<Ibooking>("Booking", BookingSchema);

export default Booking;