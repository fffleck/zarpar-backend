"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const QuotationSchema = new mongoose_1.default.Schema({
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
    embarcador_email: { type: String },
    embarcador_cnpj: { type: String },
    embarcador_endereco: { type: String },
    embarcador_nome: { type: String, required: true },
    Currency: { type: String },
    agenteDeCarga: { type: String },
    CargaEspecial: { type: String },
    totalRegistros: { type: Number, required: false },
    totalCotados: { type: Number, required: false },
    status: { type: String, default: "Waiting" },
});
const Quotation = mongoose_1.default.model("Quotation", QuotationSchema);
exports.default = Quotation;
