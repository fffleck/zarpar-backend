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
const quotation_service_1 = __importDefault(require("../../services/quotations.service"));

const save_quotation = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', '*');
    res.setHeader('Access-Control-Allow-Headers', '*');
    
    const informacoesQuotation = req.body;
    
    const armadores = informacoesQuotation.Armadores.split(",")

    if (armadores.length > 0) {
      armadores.forEach(async (armador) => {
        informacoesQuotation.armador = armador;

        await quotation_service_1.default.create(informacoesQuotation)
      })
      return res.status(200).json({
          success: true,
          errorCode: 0,
          message: "Quotations salvas com sucesso."
      });

    } else {
      informacoesQuotation.armador = informacoesQuotation.Armadores;
      quotation_service_1.default.create(informacoesQuotation).then((id) => {
        return res.status(200).json({
            success: true,
            errorCode: 0,
            message: "Quotation salva com sucesso."
        });
      }).catch(err => {
        if (err.name === 'MongoServerError' && err.code === 11000) {
            return res.status(422).send({ succes: false, errorCode: err.code, message: 'Quotation já cadastrado!' });
        } else {
            return res.status(500).json({ success: false, errorCode: err.code, message: "Problema ao cadastrar Quotation" });
        }
      });
  }
    




});

exports.save_quotation = save_quotation;
