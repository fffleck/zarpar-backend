
import {Request, Response} from "express";
import portoService from "../../services/porto.service";

export const list_portos = async (req: Request, res: Response)=>{
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', '*');
  res.setHeader('Access-Control-Allow-Headers', '*');

  const listPortos = await portoService.getAll()
    
  if(listPortos.length){
      res.json({
          success: true,
          message: "Portos Encontrados",
          list: listPortos
      })
  } else{
    res.json({
      success: false,
      message: "Portos não Encontrados",
      list: []
  })
  }
};