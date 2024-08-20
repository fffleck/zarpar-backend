"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const CachedSchema = new mongoose_1.default.Schema({
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
    email: { type: String },
    dateRegister: { type: Date, default: Date.now, required: true }
});
CachedSchema.index({ shipment_id: 1, tipo_container: 1, id_tipo_container: 1, porto_embarque: 1, porto_descarga: 1, armador: 1, navio: 1, data_embarque: 1, tempo_de_transito: 1, data_chegada: 1, email: 1 }, { unique: true });
const Cached = mongoose_1.default.model("Cached", CachedSchema);
exports.default = Cached;
