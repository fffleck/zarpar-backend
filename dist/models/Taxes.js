"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const TaxesSchema = new mongoose_1.default.Schema({
    direcao: { type: String, required: true },
    armador: { type: String, required: true },
    porto: { type: String, required: true  },
    container: { type: String, required: true  },
    taxName: { type: String, required: true  },
    taxValue: { type: Number, required: true  },
});
const Taxes = mongoose_1.default.model("Taxes", TaxesSchema);
exports.default = Taxes;
