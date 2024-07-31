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
exports.save_schedule = void 0;
const booking_service_1 = __importDefault(require("../../services/booking.service"));
const save_schedule = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', '*');
    res.setHeader('Access-Control-Allow-Headers', '*');
    const informacoesPedido = req.body;
    let totalTaxas = 0;
    const valor_inicial = parseFloat(informacoesPedido.quantidade_containers) * parseFloat(informacoesPedido.frete);
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
    informacoesPedido.valor = valor_inicial + totalTaxas;
    informacoesPedido.mercadoria = informacoesPedido.selectMercadoria ? informacoesPedido.selectMercadoria.split(" - ")[1] : null;
    informacoesPedido.status = 'Pending';
    const save_schedule = yield booking_service_1.default.scheduleBooking(informacoesPedido);
    if (save_schedule) {
        res.json({
            success: true,
            message: "Schedule Booking Cadastrado com sucesso"
        });
    }
    else {
        res.status(401).json({
            success: false,
            message: "Problema ao cadastrar novo Schedule Booking."
        });
    }
});
exports.save_schedule = save_schedule;
