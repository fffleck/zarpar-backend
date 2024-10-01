"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Robot_1 = __importDefault(require("../models/Robot"));
const create = (body) => Robot_1.default.create(body);
const getAll = () => Robot_1.default.find();
const getOne = (params) => Robot_1.default.find(params);
exports.default = {
    create,
    getAll,
    getOne
};
