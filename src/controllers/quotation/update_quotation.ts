import {Request, Response} from "express";
import quotationsService from "../../services/quotations.service";

export const update_quotation = async (req: Request, res: Response)=>{
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', '*');
  res.setHeader('Access-Control-Allow-Headers', '*');

  const quotationId = req.body.quotationId
  const valorCotado = req.body.valorCotado
  const quotationPai = req.body.quotationPai

  const updateQuotation = await quotationsService.updateQuotation('Quoted', valorCotado, quotationId)

  if(updateQuotation){
    await quotationsService.finalizaQuotationPai('Processing', quotationPai)
    res.json({
        success: true,
        message: "Quotations Atualizada com sucesso",
    })
  } else {
    res.status(401).json({
      success: false,
      message: "Problema ao atualizar quotations."
    })
  }
};