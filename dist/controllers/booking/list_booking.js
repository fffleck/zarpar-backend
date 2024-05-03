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
const user_service_1 = __importDefault(require("../../services/user.service"));
const list_booking = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', '*');
    res.setHeader('Access-Control-Allow-Headers', '*');
    
    const informacoesPedido = req.body;

    const email = informacoesPedido.email;

    console.log("Email", email)

    const listBookings = yield booking_service_1.default.getBookinByEmail(email);

    if (listBookings) {
        return res.status(200).json({
            success: true,
            message: "Booking cadastrado com sucesso.",
            list: listBookings
        });
    } else {
        res.status(404).json({
            success: false,
            message: "Problema ao localizar bookings"
        });
    }

    
});

exports.list_booking = list_booking;
