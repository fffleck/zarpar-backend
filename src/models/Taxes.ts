import mongoose from 'mongoose';

// Document interface
export interface ITaxes extends mongoose.Document {
    direcao: string;
    armador: string;
    porto: string;
    container: number;
    taxname: string;
    taxValue: number;
    applicability: string; 
    currency: string;
  }

  const TaxesSChema = new mongoose.Schema({
    direcao: { type: String },
    armador: { type: String },
    porto: { type: String },
    container: { type: Number },
    taxname: { type: String },
    taxValue: { type: Number },
    applicability: { type: String, default: "U"},
    currency: { type: String },
  })

  const Taxes = mongoose.model<ITaxes>("Taxes", TaxesSChema);

export default Taxes;