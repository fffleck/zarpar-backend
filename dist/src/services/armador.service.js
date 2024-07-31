"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Armador_1 = __importDefault(require("../models/Armador"));
const create = (body) => Armador_1.default.create(body);
const getAll = () => Armador_1.default.find();
const getOne = (params) => Armador_1.default.find(params);
const getByIdArmador = (id) => Armador_1.default.findOne({ idArmador: id });
exports.default = {
    create,
    getAll,
    getOne,
    getByIdArmador
};
