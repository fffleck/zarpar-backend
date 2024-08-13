"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Fornecedores_1 = __importDefault(require("../models/Fornecedores"));
const create = (body) => Fornecedores_1.default.create(body);
const getAll = () => Fornecedores_1.default.find();
const getOne = (params) => Fornecedores_1.default.find(params);
const getByIdFornecedor = (id) => Fornecedores_1.default.findOne({ id: id });
const deleteOne = (body) => Fornecedores_1.default.deleteOne({ id: body.id });
exports.default = {
    create,
    getAll,
    getOne,
    getByIdFornecedor,
    deleteOne
};
