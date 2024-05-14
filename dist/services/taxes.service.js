"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Taxes_1 = __importDefault(require("../models/Taxes"));

const create = (body) => Booking_1.default.create(body);
const getByPort = async (body) => {
    try {
        const taxes = await Taxes_1.default.find({ direcao: "EXPORTAÇÃO", porto: body.porto.trim(), armador: body.armador.trim(), container: body.container});
        return taxes;
    } catch (error) {
        return [];
    }
};
const getAll = () => Taxes_1.default.find();


exports.default = {
    create,
    getByPort,
    getAll,
};
