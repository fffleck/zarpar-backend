import mongoose from 'mongoose';

// Document interface
export interface ICached extends mongoose.Document {
  shipment_id: string;
  tipo_container: string;
  id_tipo_container: string;
  porto_embarque: string;
  porto_descarga: string;
  armador: string;
  id_armador: string;
  navio: string;
  data_embarque: string;
  tempo_de_transito: string;
  data_chegada: string;
  base_freight: number;
  bunker: number;
  isps: number;
  imagem_link: string;
  }

const CachedSchema = new mongoose.Schema({
  shipment_id: { type: String },
  tipo_container: { type: String },
  id_tipo_container: { type: String },
  porto_embarque: { type: String, required: true },
  porto_descarga: { type: String, required: true },
  armador: { type: String, required: true },
  id_armador: { type: String },
  navio: { type: String },
  data_embarque: { type: String },
  tempo_de_transito: { type: String },
  data_chegada: { type: String },
  base_freight: { type: Number, default: 0 },
  bunker: { type: Number, default: 0 },
  isps: { type: Number, default: 0 },
  imagem_link: { type: String },
});

CachedSchema.index({shipment_id: 1, tipo_container: 1, id_tipo_container: 1, porto_embarque: 1, porto_descarga: 1, armador: 1, navio: 1, data_embarque: 1, tempo_de_transito: 1, data_chegada: 1}, { unique: true})

const Cached = mongoose.model<ICached>("Cached", CachedSchema);

export default Cached;