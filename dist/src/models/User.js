"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const UserSchema = new mongoose_1.default.Schema({
    name: {
        type: String,
        required: true
    },
    enterpriseName: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    zipCode: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    telefone: {
        type: Number,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    search: {
        type: Number,
        required: false
    },
    countLogin: {
        type: Number,
        required: false
    },
    lastLogin: {
        type: Date,
        required: false
    },
    active: {
        type: String,
        default: "A"
    }
});
const User = mongoose_1.default.model("User", UserSchema);
exports.default = User;
