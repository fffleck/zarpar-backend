import mongoose from 'mongoose';

// Document interface
export interface INcm extends mongoose.Document {
    code: string;
    name: string;
  }

  const NCMSChema = new mongoose.Schema({
    code: {
        type:String,
        required:true
    },
    name: {
        type:String,
        required:true
    },
  })

  const Ncm = mongoose.model<INcm>("Ncm", NCMSChema);

export default Ncm;