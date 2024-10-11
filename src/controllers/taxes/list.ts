
import {Request, Response} from "express";
import taxesService from "../../services/taxes.service";

export const list_taxas = async (req: Request, res: Response)=>{
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', '*');
  res.setHeader('Access-Control-Allow-Headers', '*');

  const listTaxas = await taxesService.getAll()
    
  if(listTaxas.length){
      res.json({
          success: true,
          message: "Taxas Encontradas",
          list: listTaxas
      })
  } else{
    res.json({
      success: false,
      message: "Taxas não Encontradas",
      list: []
  })
  }
};