"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Taxes_1 = __importDefault(require("../models/Taxes"));
const create = (body) => Taxes_1.default.create(body);
const getAll = () => Taxes_1.default.find();
const getByPort = (body) => Taxes_1.default.find({ direcao: 'EXPORTAÇÃO', porto: body.porto.trim(), armador: body.armador.trim(), container: body.container });
exports.default = {
    create,
    getAll,
    getByPort
};
