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
const getAll = () => Quotation_1.default.find();
const updateQuotation = async (body, quotationId) => {
    try {
      const Quotation = Quotation_1.default;
    
      const updatedQuotation = await Quotation.findByIdAndUpdate(quotationId, {
        body
      }, { new: true });
  
      if (!updatedQuotation) {
        throw new Error('Reserva não encontrada ou não pôde ser atualizada.');
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
