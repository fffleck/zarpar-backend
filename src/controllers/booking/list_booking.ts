import {Request, Response} from "express";
import bookingService from "../../services/booking.service";

export const list_booking = async (req: Request, res: Response)=>{
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', '*');
  res.setHeader('Access-Control-Allow-Headers', '*');

  

  const informacoesPedido = req.body;
  let listBookings = [];

  if (informacoesPedido.email==='ffleck@gmail.com' || informacoesPedido.email === 'alvaro@zarpar.net') {
    listBookings = await bookingService.getAll()
  } else {
    listBookings = await bookingService.getBookingByEmail(informacoesPedido.email)
  }

  if(listBookings.length){
      res.json({
          success: true,
          message: "Booking Encontrado",
          list: listBookings
      })
  } else{
    res.status(401).json({
      success: false,
      message: "Problema ao localizar bookings."
    })
  }
};