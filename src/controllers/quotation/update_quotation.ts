import {Request, Response} from "express";
import quotationsService from "../../services/quotations.service";

export const update_quotation = async (req: Request, res: Response)=>{
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', '*');
  res.setHeader('Access-Control-Allow-Headers', '*');

  const quotationId = req.body.quotationId

  const updateQuotation = await quotationsService.updateQuotation('Finally', quotationId)
  
  if(updateQuotation){
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