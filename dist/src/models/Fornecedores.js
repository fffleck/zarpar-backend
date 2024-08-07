"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const FornecedorSchema = new mongoose_1.default.Schema({
    idArmador: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    tradelane: {
        type: String,
        required: true,
    }
});
FornecedorSchema.index({ idArmador: 1, email: 1, tradelane: 1 }, { unique: true });
const Fornecedor = mongoose_1.default.model("Fornecedor", FornecedorSchema);
exports.default = Fornecedor;
