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
exports.update_quotation = void 0;
const quotations_service_1 = __importDefault(require("../../services/quotations.service"));
const update_quotation = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', '*');
    res.setHeader('Access-Control-Allow-Headers', '*');
    const quotationId = req.body.quotationId;
    const valorCotado = req.body.valorCotado;
    const quotationPai = req.body.quotationPai;
    const updateQuotation = yield quotations_service_1.default.updateQuotation('Quoted', valorCotado, quotationId);
    if (updateQuotation) {
        yield quotations_service_1.default.finalizaQuotationPai('Processing', quotationPai);
        res.json({
            success: true,
            message: "Quotations Atualizada com sucesso",
        });
    }
    else {
        res.status(401).json({
            success: false,
            message: "Problema ao atualizar quotations."
        });
    }
});
exports.update_quotation = update_quotation;
