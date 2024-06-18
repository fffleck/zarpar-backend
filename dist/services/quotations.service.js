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
const Quotation_1 = __importDefault(require("../models/QuotationNAC"));

const create = (body) => Quotation_1.default.create(body);
const getListByEmail = (emailRequerido) => Quotation_1.default.find({ embarcador_email: emailRequerido });
const getQuotationById = (id) => Quotation_1.default.findById(id);
const getAll = () => Quotation_1.default.find({ status: 'Active'});
const { isValidObjectId } = require('mongoose');

const updateQuotation = async (body, quotationId) => {
    try {
        if (!isValidObjectId(quotationId)) {
            throw new Error('ID inválido');
        }

        if (!body || !body.status) {
            throw new Error('Campo "status" está faltando ou é inválido');
        }

        const existingQuotation = await Quotation_1.default.findById(quotationId);
        if (!existingQuotation) {
            throw new Error('Quotation não encontrada');
        }

        const updatedQuotation = await Quotation_1.default.findByIdAndUpdate(
            quotationId, 
            { status: body.status },
            { new: true, useFindAndModify: false } // Adicione useFindAndModify: false se estiver usando Mongoose v5.x
        );

        if (!updatedQuotation) {
            throw new Error('Quotation não pôde ser atualizada');
        }

        return updatedQuotation;
    } catch (error) {
        console.error('Erro ao atualizar quotation:', error);
        throw error; 
    }
};


exports.default = {
    create,
    getListByEmail,
    getQuotationById,
    getAll,
    updateQuotation,
};
