import {Request, Response} from "express";
import bookingService from "../../services/booking.service";
import { ITaxes } from "../../models/Taxes";

export const save_schedule = async (req: Request, res: Response)=>{
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', '*');
  res.setHeader('Access-Control-Allow-Headers', '*');

  const informacoesPedido = req.body;
  let totalTaxas = 0;
  const valor_inicial = parseFloat(informacoesPedido.quantidade_containers) * parseFloat(informacoesPedido.frete)

  if (informacoesPedido.taxas.length > 0 ) {
    informacoesPedido.taxas.forEach((taxLine: ITaxes) => {
      if (taxLine.applicability == "U") {
        totalTaxas += totalTaxas + taxLine.taxValue;
      } else {
        totalTaxas += totalTaxas + (taxLine.taxValue * informacoesPedido.quantidade_containers);
      }
      
    })
  }

  informacoesPedido.valor = valor_inicial + totalTaxas;
  informacoesPedido.mercadoria = informacoesPedido.selectMercadoria ? informacoesPedido.selectMercadoria.split(" - ")[1] : null
  informacoesPedido.status = 'Pending'
  
  const save_schedule = await bookingService.scheduleBooking(informacoesPedido)

  if(save_schedule){
      res.json({
          success: true,
          message: "Schedule Booking Cadastrado com sucesso"
      })
  } else{
    res.status(401).json({
      success: false,
      message: "Problema ao cadastrar novo Schedule Booking."
    })
  }
};