import {Request, Response} from "express";
import portoService from "../../services/porto.service";


export const new_porto = async (req: Request, res: Response)=>{
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', '*');
  res.setHeader('Access-Control-Allow-Headers', '*');

  const infsPortos = req.body;  
  
  const save_portos = await portoService.create(infsPortos)

  if(save_portos){
      res.json({
          success: true,
          message: "Porto Cadastrado com sucesso"
      })
  } else{
    res.status(401).json({
      success: false,
      message: "Problema ao cadastrar novo Porto."
    })
  }
};