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

const save_schedule = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', '*');
    res.setHeader('Access-Control-Allow-Headers', '*');
    
    const informacoesBooking = req.body;
    let totalTaxas = 0;
    const valor_inicial  = parseFloat(informacoesBooking.quantidade_containers) * parseFloat(informacoesBooking.frete)

    
    if (informacoesBooking.taxas.length > 0) {
        informacoesBooking.taxas.forEach((taxLine) => {
            totalTaxas =+ totalTaxas+(taxLine.taxValue * informacoesBooking.quantidade_containers);
        })
    }

    informacoesBooking.valor = valor_inicial + totalTaxas + 100; // os 100 é a taxa da Zarpar
    informacoesBooking.mercadoria = informacoesBooking.selectMercadoria ? informacoesBooking.selectMercadoria.split(" - ")[1] : null;
    informacoesBooking.status = 'Pending'



    booking_service_1.default.scheduleBooking(informacoesBooking)
    .then((id) => {
        return res.status(200).json({
            success: true,
            errorCode: 0,
            message: "Schedule Booking cadastrado com sucesso."
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

exports.save_schedule = save_schedule;
