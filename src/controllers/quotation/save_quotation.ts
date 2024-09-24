import {Request, Response} from "express";
import quotationsService from "../../services/quotations.service";
import armadorService from "../../services/armador.service";
import Quotation from "../../models/Quotation";

export const save_quotation = async (req: Request, res: Response)=>{
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', '*');
  res.setHeader('Access-Control-Allow-Headers', '*');

  const savedQuotations = []
  let salvou = false
  const informacoesQuotations = req.body

  const quotationPai = await quotationsService.save(informacoesQuotations);

  const armadores = informacoesQuotations.Armadores
  let arrArmador = armadores.split(',')

  if (arrArmador.length > 0) {
    if (armadores === 'todos') { 
      arrArmador = await armadorService.getAll() 
      for (const armador of arrArmador) {
        informacoesQuotations.armador = armador.name
        informacoesQuotations.quotationId = quotationPai._id

        const saveQuotation = await quotationsService.create(informacoesQuotations);
        if (saveQuotation) {
          savedQuotations.push(saveQuotation);
        }
      }
    } else {

      for (const armador of arrArmador) {
        const dadosArmador = await armadorService.getAll();

        dadosArmador.forEach((linha) => {
          if (linha.idArmador === armador) {
            informacoesQuotations.armador = linha.name
          }
        })
  
        informacoesQuotations.quotationId = quotationPai._id
        
        const saveQuotation = await quotationsService.create(informacoesQuotations);
        if (saveQuotation) {
          savedQuotations.push(saveQuotation);
        }
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