"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const BookingSchema = new mongoose_1.default.Schema({
    armador: {
        type: String,
        required: true
    },
    data_embarque: {
        type: String,
        required: true
    },
    embarcador_nome: {
        type: String,
        required: true
    },
    embarcador_email: {
        type: String,
        required: true
    },
    tipo_mercadoria: {
        type: String,
        required: true
    },
    porto_embarque: {
        type: String,
        required: true,
    },
    porto_descarga: {
        type: String,
        required: true
    },
    quantidade_containers: {
        type: String,
        required: true
    },
    tipo_container: {
        type: String,
        required: true
    },
    valor: {
        type: String,
        required: true
    }
});
const Booking = mongoose_1.default.model("Booking", BookingSchema);
exports.default = Booking;
