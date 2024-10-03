import {Request, Response} from "express";
import bookingService from "../../services/booking.service";
import { ITaxes } from "../../models/Taxes";

export const save_booking = async (req: Request, res: Response)=>{
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', '*');
  res.setHeader('Access-Control-Allow-Headers', '*');

  const informacoesPedido = req.body;  
  let totalTaxas = 0;

  informacoesPedido.email = informacoesPedido.embarcador_email

  if (informacoesPedido.taxas.length > 0 ) {
    informacoesPedido.taxas.forEach((taxLine: ITaxes) => {
      if (taxLine.applicability == "U") {
        totalTaxas += totalTaxas + taxLine.taxValue;
      } else {
        totalTaxas += totalTaxas + (taxLine.taxValue * informacoesPedido.quantidade_containers);
      }
    })
  }

  
  const save_booking = await bookingService.create(informacoesPedido)

  if(save_booking){
      res.json({
          success: true,
          message: "Booking Cadastrado com sucesso"
      })
  } else{
    res.status(401).json({
      success: false,
      message: "Problema ao cadastrar novo booking."
    })
  }
};