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
exports.new_taxas = void 0;
const taxes_service_1 = __importDefault(require("../../services/taxes.service"));
const new_taxas = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', '*');
    res.setHeader('Access-Control-Allow-Headers', '*');
    const infsTaxas = req.body;
    infsTaxas.direcao = infsTaxas.sentido;
    infsTaxas.container = infsTaxas.container.split("'")[0];
    infsTaxas.porto = infsTaxas.porto.split("-")[0];
    infsTaxas.taxValue = parseInt(infsTaxas.taxValue);
    console.log("Dados validados", infsTaxas);
    const save_freight = yield taxes_service_1.default.create(infsTaxas);
    if (save_freight) {
        res.json({
            success: true,
            message: "Taxa Cadastrada com sucesso"
        });
    }
    else {
        res.status(401).json({
            success: false,
            message: "Problema ao cadastrar nova Taxa."
        });
    }
});
exports.new_taxas = new_taxas;
