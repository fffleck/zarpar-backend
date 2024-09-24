import {Request, Response} from "express";
import quotationsService from "../../services/quotations.service";

export const list_mynacs = async (req: Request, res: Response)=>{
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', '*');
  res.setHeader('Access-Control-Allow-Headers', '*');

  const email = req.params.email;

  const listQuotations = await quotationsService.getListByEmail(email)

  // console.log("MY NACS", listQuotations)
  for (const quotation of listQuotations) {
    const totalregistrosnac = await quotationsService.getTotalNacs(quotation._id);
    const totalregistroscotados = await quotationsService.getTotalNacsCotados(quotation._id);
    quotation.totalRegistros = totalregistrosnac
    quotation.totalCotados = totalregistroscotados
  }

  if(listQuotations){
      res.json({
          success: true,
          message: "Quotations Encontrado",
          list: listQuotations
      })
  } else{
    res.status(401).json({
      success: false,
      message: "Problema ao localizar quotations."
    })
  }
};