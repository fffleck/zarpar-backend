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
exports.save_booking = void 0;
const booking_service_1 = __importDefault(require("../../services/booking.service"));
const user_service_1 = __importDefault(require("../../services/user.service"));
const update_booking = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', '*');
    res.setHeader('Access-Control-Allow-Headers', '*');
    
    const bookingId = req.body.bookingid;
    const statusBooking = req.body.Status
    const blNumber = req.body.inputBLNumber
    const BookingNumber = req.body.inputBookingId

    booking_service_1.default.updateBooking({body: {blNumber: blNumber, booking_id: BookingNumber, status: statusBooking}, bookingId})
    .then((id) => {
        return res.status(200).json({
            success: true,
            errorCode: 0,
            message: "Booking atualizado com sucesso."
        });
    })
    .catch(err => {
    if (err.name === 'MongoServerError' && err.code === 11000) {
        // Duplicate e-mail
        return res.status(422).send({ succes: false, errorCode: err.code, message: 'Booking já cadastrado!' });
    }
    else {
        return res.status(500).json({ success: false, errorCode: err.code, message: "Problema ao cadastrar booking" });
    }
});




});

exports.update_booking = update_booking;
