"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const ScheduleSchema = new mongoose_1.default.Schema({
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
    selectMercadoria: { type: String },
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
    status: { type: String }
});
const Schedule = mongoose_1.default.model("Schedule", ScheduleSchema);
exports.default = Schedule;
