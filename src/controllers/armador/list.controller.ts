import {Request, Response} from "express";
import armador_loginService from "../../services/armador_login.service";

export const list_armadores = async (req: Request, res: Response)=>{
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', '*');
  res.setHeader('Access-Control-Allow-Headers', '*');

  const email = req.body.email;
  let listArmadores = [];

  listArmadores = await armador_loginService.getByEmail(email)
  

  if(listArmadores.length){
      res.json({
          success: true,
          message: "Armadores Encontrados",
          list: listArmadores
      })
  } else{
    res.json({
      success: true,
      message: "Armadores não Encontrado",
      list: []
  })
  }
};