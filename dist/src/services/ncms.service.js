"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Ncm_1 = __importDefault(require("../models/Ncm"));
const create = (body) => Ncm_1.default.create(body);
const getAll = () => Ncm_1.default.find();
const getByName = (codigo) => Ncm_1.default.find({ $or: [{ name: new RegExp('.*' + codigo + '.*') }, { codigo: new RegExp(codigo + '.*') }] }, { _id: 0, code: 1, name: 1 });
exports.default = {
    create,
    getAll,
    getByName
};
