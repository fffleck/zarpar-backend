import {Request, Response} from "express";
import quotationsService from "../../services/quotations.service";

export const list_quotations = async (req: Request, res: Response)=>{
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', '*');
  res.setHeader('Access-Control-Allow-Headers', '*');


  const listQuotations = await quotationsService.getAll()

  if(listQuotations){
      res.json({
          success: true,
          message: "Quotations Encontrado",
          list: listQuotations
      })
  } else{
    res.status(401).json({
      success: false,
      message: "Problema ao localizar quotations."
    })
  }
};