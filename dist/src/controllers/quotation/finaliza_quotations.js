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
exports.finaliza_quotation = void 0;
const quotations_service_1 = __importDefault(require("../../services/quotations.service"));
const finaliza_quotation = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', '*');
    res.setHeader('Access-Control-Allow-Headers', '*');
    const quotationPai = req.body.quotationId;
    const quotationSelect = req.body.id;
    const updateQuotationPai = yield quotations_service_1.default.finalizaQuotationPai('Done', quotationPai);
    const updateQuotation = yield quotations_service_1.default.finalizaQuotation('Selected', quotationSelect);
    const quotationBrothers = yield quotations_service_1.default.getQuotationsBrothers(quotationPai);
    if (quotationBrothers.length > 0) {
        quotationBrothers.forEach((quoteB) => __awaiter(void 0, void 0, void 0, function* () {
            yield quotations_service_1.default.finalizaQuotation('Discarted', quoteB._id);
        }));
    }
    if (updateQuotation && updateQuotationPai) {
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
exports.finaliza_quotation = finaliza_quotation;
