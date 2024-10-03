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
const save_booking = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', '*');
    res.setHeader('Access-Control-Allow-Headers', '*');
    const informacoesPedido = req.body;
    let totalTaxas = 0;
    informacoesPedido.email = informacoesPedido.embarcador_email;
    if (informacoesPedido.taxas.length > 0) {
        informacoesPedido.taxas.forEach((taxLine) => {
            if (taxLine.applicability == "U") {
                totalTaxas += totalTaxas + taxLine.taxValue;
            }
            else {
                totalTaxas += totalTaxas + (taxLine.taxValue * informacoesPedido.quantidade_containers);
            }
        });
    }
    const save_booking = yield booking_service_1.default.create(informacoesPedido);
    if (save_booking) {
        res.json({
            success: true,
            message: "Booking Cadastrado com sucesso"
        });
    }
    else {
        res.status(401).json({
            success: false,
            message: "Problema ao cadastrar novo booking."
        });
    }
});
exports.save_booking = save_booking;
