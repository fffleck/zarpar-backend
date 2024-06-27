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
const create = (body) => QuotationNAC_1.default.create(body);
const getListByEmail = (emailRequerido) => QuotationNAC_1.default.find({ embarcador_email: emailRequerido });
const getQuotationById = (id) => QuotationNAC_1.default.findById(id);
const getAll = () => QuotationNAC_1.default.find();
const updateQuotation = (status, quotationId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const updateQuotations = yield QuotationNAC_1.default.findByIdAndUpdate(quotationId, {
            status: status,
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
exports.default = {
    create,
    getListByEmail,
    getQuotationById,
    getAll,
    updateQuotation
};
