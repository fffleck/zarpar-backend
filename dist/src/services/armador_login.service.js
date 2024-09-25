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
const ArmadorLogin_1 = __importDefault(require("../models/ArmadorLogin"));
const create = (body) => ArmadorLogin_1.default.create(body);
const getAll = () => ArmadorLogin_1.default.find();
const getOne = (params) => ArmadorLogin_1.default.find(params);
const getByArmador = (armador) => ArmadorLogin_1.default.findOne({ armador: armador });
const getByEmail = (email) => ArmadorLogin_1.default.find({ email: email });
const getExistArmador = (armador, email) => ArmadorLogin_1.default.count({ armador: armador, email: email });
const update = (body) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const bodyObject = body.toObject ? body.toObject() : Object.assign({}, body);
        delete bodyObject._id;
        const updateArmador = yield ArmadorLogin_1.default.findOneAndUpdate({ armador: body.armador, email: body.email }, bodyObject, { new: true });
        if (!updateArmador) {
            throw new Error('Armador não encontrado ou não pode ser atualizado.');
        }
        return updateArmador;
    }
    catch (error) {
        console.error('Erro ao atualizar Armador: ', error);
        throw error;
    }
});
exports.default = {
    create,
    getAll,
    getOne,
    getByArmador,
    getByEmail,
    getExistArmador,
    update
};
