import {Request, Response} from "express";
import quotationsService from "../../services/quotations.service";

export const getQuotation = async (req: Request, res: Response)=>{
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', '*');
  res.setHeader('Access-Control-Allow-Headers', '*');

  const quotationId = req.params.id;

  const quotationFound = await quotationsService.getQuotationById(Object(quotationId))

  if(quotationFound){
      res.json({
          success: true,
          message: "Quotation Encontrado",
          list: quotationFound
      })
  } else{
    res.status(401).json({
      success: false,
      message: "Problema ao localizar quotation."
    })
  }
};