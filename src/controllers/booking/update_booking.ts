import {Request, Response} from "express";
import bookingService from "../../services/booking.service";

export const update_booking = async (req: Request, res: Response)=>{
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', '*');
  res.setHeader('Access-Control-Allow-Headers', '*');

  const informacoesBooking = req.body;
  
  const update_booking = await bookingService.updateBooking(informacoesBooking, informacoesBooking.bookingId)

  if(update_booking){
      res.json({
          success: true,
          message: "Booking Atualizado com sucesso"
      })
  } else{
    res.status(401).json({
      success: false,
      message: "Problema ao Atualizar Booking."
    })
  }
};