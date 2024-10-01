"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const RobotSchema = new mongoose_1.default.Schema({
    porto_origem: {
        type: String,
        required: true,
    },
    porto_origem_country: {
        type: String,
        required: true,
    },
    porto_destino: {
        type: String,
        required: true
    },
    porto_destino_country: {
        type: String,
        required: true
    },
    mercadoria: {
        type: String,
        required: true,
        default: 'SPOT'
    },
    qtd_container: {
        type: Number,
        required: true
    },
    type_container: {
        type: String,
        required: true,
    },
    peso_container: {
        type: String,
        required: true,
    },
    data_embarque: {
        type: String,
        required: true,
    },
    user: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    }
});
const Robot = mongoose_1.default.model("Robot", RobotSchema);
exports.default = Robot;
