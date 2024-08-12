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
exports.add_fornecedor = void 0;
const fornecedor_service_1 = __importDefault(require("../../services/fornecedor.service"));
const add_fornecedor = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', '*');
    res.setHeader('Access-Control-Allow-Headers', '*');
    const objFornecedor = req.body;
    objFornecedor.idArmador = objFornecedor.armador;
    objFornecedor.name = objFornecedor.nome;
    objFornecedor.tradelane = objFornecedor.tradelane.toString();
    const save_fornecedor = yield fornecedor_service_1.default.create(objFornecedor).then((id) => {
        return res.status(200).json({
            success: true,
            message: "Fornecedor salvo com sucesso."
        });
    }).catch(err => {
        if (err.name === 'MongoServerError' && err.code === 11000) {
            return res.status(200).send({ succes: false, errorCode: err.code, message: 'Fornecedor já cadastrado!' });
        }
        else {
            return res.status(500).json({ success: false, errorCode: err.code, message: "Problema ao cadastrar Fornecedor" });
        }
    });
    if (save_fornecedor) {
    }
    else {
        res.status(403).json({
            success: false,
            message: "Problema ao gravar fornecedor."
        });
    }
});
exports.add_fornecedor = add_fornecedor;
