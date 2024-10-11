
import {Request, Response} from "express";
import frete_maritmoService from "../../services/frete_maritmo.service";

export const list_fretes = async (req: Request, res: Response)=>{
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', '*');
  res.setHeader('Access-Control-Allow-Headers', '*');

  const listFretes = await frete_maritmoService.getAll()
    
  if(listFretes.length){
      res.json({
          success: true,
          message: "Fretes Encontrados",
          list: listFretes
      })
  } else{
    res.json({
      success: false,
      message: "Fretes não Encontrados",
      list: []
  })
  }
};