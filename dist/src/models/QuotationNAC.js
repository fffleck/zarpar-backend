"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const QuotationNACSchema = new mongoose_1.default.Schema({
    quotationId: { type: String, required: true },
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
    valorCotado: { type: String, required: false, default: 0 },
    status: { type: String, default: "Pending" },
});
const QuotationNac = mongoose_1.default.model("QuotationNac", QuotationNACSchema);
exports.default = QuotationNac;
