import { ObjectId } from "mongoose";
import Booking, { Ibooking } from "../models/Booking";
import Schedule, { ISchedule } from "../models/Schedule";

const create = (body: Ibooking) => Booking.create(body);
const getListByEmail = (emailRequerido: any) => Booking.find({embarcador_email: emailRequerido});
const getBookingByEmail = (emailRequerido: any) => Booking.find({email: emailRequerido});
const getAll = () => Booking.find();
const getBookingById = (id: ObjectId) => Schedule.findById(id);
const scheduleBooking = (body: ISchedule) => Schedule.create(body);
const updateBooking = async (body: any, bookingId: any) => {
  try {
    const updateBooking = await Schedule.findByIdAndUpdate(bookingId, {
      status: body.Status,
      id: bookingId,
      bl_number: body.inputBLNumber,
      booking_id: body.inputBookingId,
    }, { new: true});

    if (!updateBooking) {
      throw new Error('Reserva não encontrada ou não pode ser atualizada.')
    }

    return updateBooking;
  } catch (error) {
    console.log('Erro ao atualizado reserva: ', error)
    throw error;
  }
}


export default {
    create,
    getListByEmail,
    getBookingByEmail,
    getAll,
    getBookingById,
    scheduleBooking,
    updateBooking
}