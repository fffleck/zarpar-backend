"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Booking_1 = __importDefault(require("../models/Booking"));
const Schedule_1 = __importDefault(require("../models/Schedule"));
const create = (body) => Booking_1.default.create(body);
const getListByEmail = (emailRequerido) => Booking_1.default.find({ embarcador_email: emailRequerido });
const getBookingByEmail = (emailRequerido) => Schedule_1.default.find({ embarcador_email: emailRequerido });
const getAll = () => Schedule_1.default.find();
const getBookingById = (id) => Schedule_1.default.findById(id);
const scheduleBooking = (body) => Schedule_1.default.create(body);
const updateBooking = (body, bookingId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const updateBooking = yield Schedule_1.default.findByIdAndUpdate(bookingId, {
            status: body.Status,
            id: bookingId,
            bl_number: body.inputBLNumber,
            booking_id: body.inputBookingId,
        }, { new: true });
        if (!updateBooking) {
            throw new Error('Reserva não encontrada ou não pode ser atualizada.');
        }
        return updateBooking;
    }
    catch (error) {
        console.log('Erro ao atualizado reserva: ', error);
        throw error;
    }
});
exports.default = {
    create,
    getListByEmail,
    getBookingByEmail,
    getAll,
    getBookingById,
    scheduleBooking,
    updateBooking
};
