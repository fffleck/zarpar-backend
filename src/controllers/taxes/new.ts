import {Request, Response} from "express";
import taxesService from "../../services/taxes.service";
import armadorService from "../../services/armador.service";


export const new_taxas = async (req: Request, res: Response)=>{
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', '*');
  res.setHeader('Access-Control-Allow-Headers', '*');

  const infsTaxas = req.body;  

  

  infsTaxas.direcao = infsTaxas.sentido;
  infsTaxas.container = infsTaxas.container.split("'")[0]
  infsTaxas.porto = infsTaxas.porto.split("-")[0]
  infsTaxas.taxValue = parseInt(infsTaxas.taxValue)

  console.log("Dados validados", infsTaxas)

  const save_freight = await taxesService.create(infsTaxas)

  if(save_freight){
      res.json({
          success: true,
          message: "Taxa Cadastrada com sucesso"
      })
  } else{
    res.status(401).json({
      success: false,
      message: "Problema ao cadastrar nova Taxa."
    })
  }
};