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
exports.list_booking = void 0;
const booking_service_1 = __importDefault(require("../../services/booking.service"));
const list_booking = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', '*');
    res.setHeader('Access-Control-Allow-Headers', '*');
    const informacoesPedido = req.body;
    let listBookings = [];
    if (informacoesPedido.email === 'ffleck@gmail.com' || informacoesPedido.email === 'alvaro@zarpar.net') {
        listBookings = yield booking_service_1.default.getAll();
    }
    else {
        listBookings = yield booking_service_1.default.getBookingByEmail(informacoesPedido.email);
    }
    if (listBookings.length) {
        res.json({
            success: true,
            message: "Booking Encontrado",
            list: listBookings
        });
    }
    else {
        res.json({
            success: true,
            message: "Booking Encontrado",
            list: []
        });
    }
});
exports.list_booking = list_booking;
