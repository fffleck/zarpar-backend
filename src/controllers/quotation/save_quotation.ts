import {Request, Response} from "express";
import quotationsService from "../../services/quotations.service";

export const save_quotation = async (req: Request, res: Response)=>{
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', '*');
  res.setHeader('Access-Control-Allow-Headers', '*');

  let saveQuotation = null
  const informacoesQuotations = req.body

  const armadores = informacoesQuotations.Armadores.split(",")

  if (armadores.lenght > 0) {
    armadores.forEach(async (armador: any) => {
      informacoesQuotations.armador = armador
      saveQuotation = await quotationsService.create(informacoesQuotations)
    })

    if(saveQuotation){
      res.json({
          success: true,
          message: "Quotations Criado com sucesso",
      })
    } else {
      res.status(401).json({
        success: false,
        message: "Problema ao localizar quotations."
      })
    }
  } else {
    informacoesQuotations.armador = informacoesQuotations.Armadores;
    saveQuotation = await quotationsService.create(informacoesQuotations)

    if(saveQuotation){
      res.json({
          success: true,
          message: "Quotations Criado com sucesso",
      })
    } else {
      res.status(401).json({
        success: false,
        message: "Problema ao localizar quotations."
      })
    }
  }

};