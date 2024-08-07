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
exports.list_fornecedor = void 0;
const fornecedor_service_1 = __importDefault(require("../../services/fornecedor.service"));
const list_fornecedor = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', '*');
    res.setHeader('Access-Control-Allow-Headers', '*');
    const objFornecedor = req.body;
    const save_fornecedor = yield fornecedor_service_1.default.create(objFornecedor);
    if (save_fornecedor) {
        res.json({
            success: true,
            message: "Fornecedor salvo com sucesso."
        });
    }
    else {
        res.status(403).json({
            success: false,
            message: "Problema ao gravar fornecedor."
        });
    }
});
exports.list_fornecedor = list_fornecedor;
