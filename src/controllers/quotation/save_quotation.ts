import {Request, Response} from "express";
import quotationsService from "../../services/quotations.service";
import armadorService from "../../services/armador.service";

export const save_quotation = async (req: Request, res: Response)=>{
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', '*');
  res.setHeader('Access-Control-Allow-Headers', '*');

  const savedQuotations = []
  let salvou = false
  const informacoesQuotations = req.body

  const armadores = informacoesQuotations.Armadores

  const arrArmador = armadores.split(',')

  if (arrArmador.length > 0) {
    for (const armador of arrArmador) {
      const dadosArmador = await armadorService.getByIdArmador(armador);

      informacoesQuotations.armador = dadosArmador?.name
      
      const saveQuotation = await quotationsService.create(informacoesQuotations);
      if (saveQuotation) {
        savedQuotations.push(saveQuotation);
      }
    }

    if (savedQuotations.length > 0) {
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
    const saveQuotation = await quotationsService.create(informacoesQuotations)

    savedQuotations.push(saveQuotation)

    if (savedQuotations.length > 0) {
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