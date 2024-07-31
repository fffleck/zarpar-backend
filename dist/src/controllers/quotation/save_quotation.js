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
exports.save_quotation = void 0;
const quotations_service_1 = __importDefault(require("../../services/quotations.service"));
const armador_service_1 = __importDefault(require("../../services/armador.service"));
const save_quotation = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', '*');
    res.setHeader('Access-Control-Allow-Headers', '*');
    const savedQuotations = [];
    let salvou = false;
    const informacoesQuotations = req.body;
    const armadores = informacoesQuotations.Armadores;
    const arrArmador = armadores.split(',');
    if (arrArmador.length > 0) {
        for (const armador of arrArmador) {
            const dadosArmador = yield armador_service_1.default.getByIdArmador(armador);
            informacoesQuotations.armador = dadosArmador === null || dadosArmador === void 0 ? void 0 : dadosArmador.name;
            const saveQuotation = yield quotations_service_1.default.create(informacoesQuotations);
            if (saveQuotation) {
                savedQuotations.push(saveQuotation);
            }
        }
        if (savedQuotations.length > 0) {
            res.json({
                success: true,
                message: "Quotations Criado com sucesso",
            });
        }
        else {
            res.status(401).json({
                success: false,
                message: "Problema ao localizar quotations."
            });
        }
    }
    else {
        informacoesQuotations.armador = informacoesQuotations.Armadores;
        const saveQuotation = yield quotations_service_1.default.create(informacoesQuotations);
        savedQuotations.push(saveQuotation);
        if (savedQuotations.length > 0) {
            res.json({
                success: true,
                message: "Quotations Criado com sucesso",
            });
        }
        else {
            res.status(401).json({
                success: false,
                message: "Problema ao localizar quotations."
            });
        }
    }
});
exports.save_quotation = save_quotation;
