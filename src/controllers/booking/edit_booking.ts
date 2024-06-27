import {Request, Response} from "express";
import bookingService from "../../services/booking.service";

export const edit_booking = async (req: Request, res: Response)=>{
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', '*');
  res.setHeader('Access-Control-Allow-Headers', '*');

  

  const pedido = req.params.id;
  const edit_booking = await bookingService.getBookingById(Object(pedido));

  if(edit_booking){
      res.json({
          success: true,
          message: "Booking Encontrado",
          list: edit_booking
      })
  } else{
    res.status(401).json({
      success: false,
      message: "Problema ao localizar booking."
    })
  }
};