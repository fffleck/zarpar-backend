"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const TaxesSChema = new mongoose_1.default.Schema({
    direcao: { type: String },
    armador: { type: String },
    porto: { type: String },
    container: { type: Number },
    taxname: { type: String },
    taxValue: { type: Number },
    currency: { type: String },
});
const Taxes = mongoose_1.default.model("Taxes", TaxesSChema);
exports.default = Taxes;
