import {Request, Response} from "express";
import bookingService from "../../services/booking.service";

export const new_booking = async (req: Request, res: Response)=>{
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', '*');
  res.setHeader('Access-Control-Allow-Headers', '*');

  const infsNewBooking = req.body;  
  infsNewBooking.created_at = new Date();
  
  const save_booking = await bookingService.create(infsNewBooking)

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