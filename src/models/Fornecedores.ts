import mongoose from 'mongoose';

// Document interface
export interface IFornecedor extends mongoose.Document {

    idArmador: string;
    email: string;
    name: string;
    phone: string;
    tradelane: string;
  }

const FornecedorSchema = new mongoose.Schema({
    idArmador:{
        type:String,
        required:true,
    },
    name:{
        type:String,
        required:true
    },
    email: {
      type: String,
      required:true,
    },
    phone: {
      type: String,
      required:true,
    },
    tradelane: {
      type:String,
      required:true,
    }
});

FornecedorSchema.index({idArmador: 1, email: 1, tradelane: 1}, {unique: true})

const Fornecedor = mongoose.model<IFornecedor>("Fornecedor", FornecedorSchema);

export default Fornecedor;