import { ObjectId } from "mongoose";
import QuotationNac, { IQuotationsNAC } from "../models/QuotationNAC";
import Quotation, { IQuotations } from "../models/Quotation";


const create = (body: IQuotationsNAC) => QuotationNac.create(body);
const save = (body: IQuotations) => Quotation.create(body);
const getListByEmail = (emailRequerido: any) => Quotation.find({embarcador_email: emailRequerido});
const getQuotationNACById = (id: ObjectId) => QuotationNac.findById(id);
const getAll = () => QuotationNac.find();
const getAllActives = () => QuotationNac.find({ status: {$nin : ["Selected", "Discarted"]}})
const getQuotationAll = () => Quotation.find();
const getQuotationById = (id: ObjectId) => Quotation.findById(id);
const getQuotationNacByQuotationId = (quotationId: ObjectId) => QuotationNac.find({quotationId: quotationId});
const getTotalNacs = (quotatonId: string) => QuotationNac.count({quotationId: quotatonId})
const getTotalNacsCotados = (quotatonId: string) => QuotationNac.count({quotationId: quotatonId, valorCotado: {$gt : 0}})
const getQuotationsBrothers = (quotatonId: string) => QuotationNac.find({ quotationId: quotatonId, status: { $ne : "Selected"}})

const updateQuotation = async (status: string, valor: string,  quotationId: ObjectId) => {
  try {
    const updateQuotations = await QuotationNac.findByIdAndUpdate(quotationId, {
      status: status,
      valorCotado: valor,
      id: quotationId
    }, { new: true});

    if (!updateQuotations) {
      throw new Error('Quotation não encontrada ou não pode ser atualizada.')
    }


    return updateQuotations;
  } catch (error) {
    console.log('Erro ao atualizado quotation: ', error)
    throw error;
  }
}

const finalizaQuotationPai = async (status: string, quotationId: ObjectId) => {
  try {
    const updateQuotation = await Quotation.findByIdAndUpdate(quotationId, {
      status: status
    }, { new: true});

    if (!updateQuotation) {
      throw new Error('Quotation Pai não encontrada ou não pode ser atualizada.')
    }

    return updateQuotation;
  } catch (error) {
    console.log('Erro ao atualizado quotation Pai: ', error)
    throw error;
  }
}

const finalizaQuotation = async (status: string, quotationId: ObjectId) => {
  try {
    const updateQuotation = await QuotationNac.findByIdAndUpdate(quotationId, {
      status: status,
      id: quotationId
    }, { new: true});

    if (!updateQuotation) {
      throw new Error('Quotation não encontrada ou não pode ser atualizada.')
    }

    return updateQuotation;
  } catch (error) {
    console.log('Erro ao atualizado quotation: ', error)
    throw error;
  }
}


export default {
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
}