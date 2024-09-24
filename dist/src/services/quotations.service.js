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
const QuotationNAC_1 = __importDefault(require("../models/QuotationNAC"));
const Quotation_1 = __importDefault(require("../models/Quotation"));
const create = (body) => QuotationNAC_1.default.create(body);
const save = (body) => Quotation_1.default.create(body);
const getListByEmail = (emailRequerido) => Quotation_1.default.find({ embarcador_email: emailRequerido });
const getQuotationNACById = (id) => QuotationNAC_1.default.findById(id);
const getAll = () => QuotationNAC_1.default.find();
const getAllActives = () => QuotationNAC_1.default.find({ status: { $nin: ["Selected", "Discarted"] } });
const getQuotationAll = () => Quotation_1.default.find();
const getQuotationById = (id) => Quotation_1.default.findById(id);
const getQuotationNacByQuotationId = (quotationId) => QuotationNAC_1.default.find({ quotationId: quotationId });
const getTotalNacs = (quotatonId) => QuotationNAC_1.default.count({ quotationId: quotatonId });
const getTotalNacsCotados = (quotatonId) => QuotationNAC_1.default.count({ quotationId: quotatonId, valorCotado: { $gt: 0 } });
const getQuotationsBrothers = (quotatonId) => QuotationNAC_1.default.find({ quotationId: quotatonId, status: { $ne: "Selected" } });
const updateQuotation = (status, valor, quotationId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const updateQuotations = yield QuotationNAC_1.default.findByIdAndUpdate(quotationId, {
            status: status,
            valorCotado: valor,
            id: quotationId
        }, { new: true });
        if (!updateQuotations) {
            throw new Error('Quotation não encontrada ou não pode ser atualizada.');
        }
        return updateQuotations;
    }
    catch (error) {
        console.log('Erro ao atualizado quotation: ', error);
        throw error;
    }
});
const finalizaQuotationPai = (status, quotationId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const updateQuotation = yield Quotation_1.default.findByIdAndUpdate(quotationId, {
            status: status
        }, { new: true });
        if (!updateQuotation) {
            throw new Error('Quotation Pai não encontrada ou não pode ser atualizada.');
        }
        return updateQuotation;
    }
    catch (error) {
        console.log('Erro ao atualizado quotation Pai: ', error);
        throw error;
    }
});
const finalizaQuotation = (status, quotationId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const updateQuotation = yield QuotationNAC_1.default.findByIdAndUpdate(quotationId, {
            status: status,
            id: quotationId
        }, { new: true });
        if (!updateQuotation) {
            throw new Error('Quotation não encontrada ou não pode ser atualizada.');
        }
        return updateQuotation;
    }
    catch (error) {
        console.log('Erro ao atualizado quotation: ', error);
        throw error;
    }
});
exports.default = {
    create,
    save,
    getListByEmail,
    getQuotationById,
    getAll,
    getAllActives,
    updateQuotation,
    getQuotationAll,
    getQuotationNACById,
    getTotalNacs,
    getTotalNacsCotados,
    finalizaQuotationPai,
    finalizaQuotation,
    getQuotationsBrothers,
    getQuotationNacByQuotationId,
};
