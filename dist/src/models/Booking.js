"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const BookingSchema = new mongoose_1.default.Schema({
    qtdContainers: {
        type: String,
        required: true,
    },
    armador: {
        type: String,
        required: true,
    },
    contractNumber: {
        type: String,
        required: true,
    },
    bookingOffice: {
        type: String,
    },
    shipper: {
        type: String,
    },
    forwarder: {
        type: String,
    },
    consignee: {
        type: String,
    },
    shipperRefNumber: {
        type: String,
    },
    forward_ref_number: {
        type: String,
    },
    purchaseOrderNumber: {
        type: String,
    },
    moveType: {
        type: String,
        required: true,
    },
    porto_embarque: {
        type: String,
        required: true,
    },
    data_embarque: {
        type: String,
        required: true,
    },
    porto_descarga: {
        type: String,
        required: true,
    },
    data_chegada: {
        type: String,
        required: true,
    },
    tipo_container: {
        type: String,
        required: true,
    },
    nomeMercadoria: {
        type: String,
        required: true,
    },
    paymentChargeType: {
        type: String,
        required: true,
    },
    paymentTerm: {
        type: String,
        required: true,
    },
    payer: {
        type: String,
        required: true,
    },
    paymentLocation: {
        type: String,
    },
    customerComment: {
        type: String,
    },
    emailnotifications: {
        type: String,
    },
    email: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        required: true,
        default: 'pending'
    },
    created_at: {
        type: Date,
        required: true,
        default: new Date()
    }
});
const Booking = mongoose_1.default.model("Booking", BookingSchema);
exports.default = Booking;
