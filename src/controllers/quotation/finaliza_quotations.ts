import {Request, Response} from "express";
import quotationsService from "../../services/quotations.service";

export const finaliza_quotation = async (req: Request, res: Response)=>{
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', '*');
  res.setHeader('Access-Control-Allow-Headers', '*');

  const quotationPai = req.body.quotationId
  const quotationSelect = req.body.id

  const updateQuotationPai = await quotationsService.finalizaQuotationPai('Done', quotationPai)
  const updateQuotation = await quotationsService.finalizaQuotation('Selected', quotationSelect)
  const quotationBrothers = await quotationsService.getQuotationsBrothers(quotationPai);

  if (quotationBrothers.length > 0) {
    quotationBrothers.forEach(async (quoteB) => {
      await quotationsService.finalizaQuotation('Discarted', quoteB._id)
    })  
  }
  
  if(updateQuotation && updateQuotationPai){
    res.json({
        success: true,
        message: "Quotations Atualizada com sucesso",
    })
  } else {
    res.status(401).json({
      success: false,
      message: "Problema ao atualizar quotations."
    })
  }
};