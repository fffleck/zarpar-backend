"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const ArmadorLoginSchema = new mongoose_1.default.Schema({
    armador: {
        type: String,
        required: true,
        unique: true
    },
    user: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    status: {
        type: Boolean,
        required: true,
        default: true,
    },
});
const ArmadorLogin = mongoose_1.default.model("ArmadorLogin", ArmadorLoginSchema);
exports.default = ArmadorLogin;
