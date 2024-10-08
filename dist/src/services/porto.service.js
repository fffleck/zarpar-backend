"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Porto_1 = __importDefault(require("../models/Porto"));
const PortoDepara_1 = __importDefault(require("../models/PortoDepara"));
const create = (body) => Porto_1.default.create(body);
const createDepara = (body) => PortoDepara_1.default.create(body);
const getOne = (porto) => Porto_1.default.findOne({ port_id: porto });
const getAll = () => Porto_1.default.find();
exports.default = {
    create,
    createDepara,
    getAll,
    getOne
};
