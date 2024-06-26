import mongoose from 'mongoose';

// Document interface
export interface IQuotationsNAC extends mongoose.Document {
  shipper: string;
  consignee: string;
  selectPortoEmbarque: string;
  selectPortoDescarga: string;
  selectMercadoria: string;
  tipoContainer: string;
  data_embarque: string;
  Incoterm: string;
  freetimeOrigem: string;
  freetimeDestino: string;
  qtdContainers: string;
  targetOceanFreight: string;
  armador: string;
  embarcador_email: string;
  embarcador_cnpj: string;
  embarcador_endereco: string;
  embarcador_nome: string;
  Currency: string;
  agenteDeCarga: string;
  CargaEspecial: string;
  status: string;
  }

const QuotationNACSchema = new mongoose.Schema({
  shipper: { type: String },
  consignee: { type: String },
  selectPortoEmbarque: { type: String },
  selectPortoDescarga: { type: String },
  selectMercadoria: { type: String },
  tipoContainer: { type: String },
  data_embarque: { type: String, required: true },
  Incoterm: { type: String },
  freetimeOrigem: { type: String },
  freetimeDestino: { type: String },
  qtdContainers: { type: String },
  targetOceanFreight: { type: String },
  armador: { type: String, required: true },
  embarcador_email: { type: String },
  embarcador_cnpj: { type: String },
  embarcador_endereco: { type: String },
  embarcador_nome: { type: String, required: true },
  Currency: { type: String },
  agenteDeCarga: { type: String },
  CargaEspecial: { type: String },
  status: { type: String, default: "Active" },
});

const QuotationNac = mongoose.model<IQuotationsNAC>("QuotationNac", QuotationNACSchema);

export default QuotationNac;