"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const NCMSChema = new mongoose_1.default.Schema({
    code: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
});
const Ncm = mongoose_1.default.model("Ncm", NCMSChema);
exports.default = Ncm;
