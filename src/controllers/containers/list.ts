
import {Request, Response} from "express";
import tipo_containerService from "../../services/tipo_container.service";

export const list_containers = async (req: Request, res: Response)=>{
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', '*');
  res.setHeader('Access-Control-Allow-Headers', '*');

  const listContainers = await tipo_containerService.getAll()
    
  if(listContainers.length){
      res.json({
          success: true,
          message: "Portos Encontrados",
          list: listContainers
      })
  } else{
    res.json({
      success: false,
      message: "Portos não Encontrados",
      list: []
  })
  }
};