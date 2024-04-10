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
const ncm_1 = __importDefault(require("../models/Ncm"));
const create = (body) => ncm_1.default.create(body);
const getAll = () => ncm_1.default.find();
const getByName = (codigo) => ncm_1.default.find({ $or: [{name: new RegExp('.*' + codigo + '.*')},{codigo: new RegExp(codigo + '.*')}] },{_id: 0, code: 1, name: 1})

exports.default = {
    create,
    getAll,
    getByName
};
