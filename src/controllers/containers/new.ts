import {Request, Response} from "express";
import tipo_containerService from "../../services/tipo_container.service";


export const new_container = async (req: Request, res: Response)=>{
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', '*');
  res.setHeader('Access-Control-Allow-Headers', '*');

  const infsContainer = req.body;  
  
  const saveContainer = await tipo_containerService.create(infsContainer)

  if(saveContainer){
      res.json({
          success: true,
          message: "Container Cadastrado com sucesso"
      })
  } else{
    res.status(401).json({
      success: false,
      message: "Problema ao cadastrar novo Container."
    })
  }
};