import {Request, Response} from "express";
import quotationsService from "../../services/quotations.service";

export const list_mynacs = async (req: Request, res: Response)=>{
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', '*');
  res.setHeader('Access-Control-Allow-Headers', '*');

  const email = req.params.email;

  const listQuotations = await quotationsService.getListByEmail(email)

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