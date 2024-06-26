import { ObjectId } from "mongoose";
import QuotationNac, { IQuotationsNAC } from "../models/QuotationNAC";


const create = (body: IQuotationsNAC) => QuotationNac.create(body);
const getListByEmail = (emailRequerido: any) => QuotationNac.find({embarcador_email: emailRequerido});
const getQuotationById = (id: ObjectId) => QuotationNac.findById(id);
const getAll = () => QuotationNac.find();
const updateQuotation = async (status: string, quotationId: ObjectId) => {
  try {
    const updateQuotations = await QuotationNac.findByIdAndUpdate(quotationId, {
      status: status,
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


export default {
    create,
    getListByEmail,
    getQuotationById,
    getAll,
    updateQuotation
}