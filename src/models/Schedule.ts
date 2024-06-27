import mongoose from 'mongoose';

// Document interface
export interface ISchedule extends mongoose.Document {
    armador: string;
    data_embarque: string;
    data_chegada: string;
    dateDeliverLastest: string;
    dateDepartureEarly: string;
    embarcador_email: string;
    embarcador_cnpj: string;
    embarcador_endereco: string;
    embarcador_nome: string;
    frete: string;
    inputBookingOffice: string;
    inputConsignee: string;
    inputContractNumber: string;
    inputPartnerEmailNotifications: string;
    inputPaymentLocation: string;
    inputShipper: string;
    inputforwardRefNumber: string;
    inputplacecarrierreceipt: string;
    inputpurchaseOrderNumber: string;
    inputshipperRefNumber: string;
    selectMercadoria: string;
    navio: string;
    porto_descarga: string;
    porto_embarque: string;
    qtdContainers: string;
    quantidade_containers: string;
    selectCarrier: string;
    selectMoveType: string;
    selectPayer: string;
    selectPaymentChargeType: string;
    selectPaymentTerm: string;
    shipment_id: string;
    tempo_de_transito: string;
    terminal_embarque: string;
    textAreaCustomerComment: string;
    tipoMercadoria: string;
    tipo_container: string;
    tipo_mercadoria: string;
    transbordo: string;
    typeContainer: string;
    valor: number;
    status: string;
    booking_id: string;
    bl_number: string;
  }

  const ScheduleSChema = new mongoose.Schema({
    armador: { type: String, required: true },
    data_embarque: { type: String, required: true },
    data_chegada: { type: String },
    dateDeliverLastest: { type: String },
    dateDepartureEarly: { type: String },
    embarcador_email: { type: String },
    embarcador_cnpj: { type: String },
    embarcador_endereco: { type: String },
    embarcador_nome: { type: String, required: true },
    frete: { type: String, required: true, },
    inputBookingOffice: { type: String },
    inputConsignee: { type: String },
    inputContractNumber: { type: String },
    inputPartnerEmailNotifications: { type: String },
    inputPaymentLocation: { type: String },
    inputShipper: { type: String },
    inputforwardRefNumber: { type: String },
    inputplacecarrierreceipt: { type: String },
    inputpurchaseOrderNumber: { type: String },
    inputshipperRefNumber: { type: String },
    selectMercadoria: { type: String },
    navio: { type: String },
    porto_descarga: { type: String },
    porto_embarque: { type: String },
    qtdContainers: { type: String },
    quantidade_containers: { type: String },
    selectCarrier: { type: String },
    selectMoveType: { type: String },
    selectPayer: { type: String },
    selectPaymentChargeType: { type: String },
    selectPaymentTerm: { type: String },
    shipment_id: { type: String },
    tempo_de_transito: { type: String },
    terminal_embarque: { type: String },
    textAreaCustomerComment: { type: String },
    tipoMercadoria: { type: String },
    tipo_container: { type: String },
    tipo_mercadoria: { type: String },
    transbordo: { type: String },
    typeContainer: { type: String },
    valor : { type: Number },
    status: { type: String },
    booking_id: { type: String },
    bl_number: { type: String },
  })

  const Schedule = mongoose.model<ISchedule>("Schedule", ScheduleSChema);

export default Schedule;