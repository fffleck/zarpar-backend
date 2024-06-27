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
exports.search_taxes = void 0;
const taxes_service_1 = __importDefault(require("../../services/taxes.service"));
const search_taxes = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', '*');
    res.setHeader('Access-Control-Allow-Headers', '*');
    const infoBooking = req.body;
    const porto = infoBooking.props.porto_embarque.split("-")[0];
    const armador = infoBooking.props.armador.replace(" ", "-").toUpperCase();
    const typeContainer = infoBooking.props.tipo_container.replace(/[^0-9]/g, '');
    const listTaxes = yield taxes_service_1.default.getByPort({ porto: porto, armador: armador, container: parseFloat(typeContainer) });
    if (listTaxes) {
        res.json({
            success: true,
            message: "Quotations Encontrado",
            list: listTaxes
        });
    }
    else {
        res.status(404).json({
            success: false,
            message: "Problema ao localizar taxas."
        });
    }
});
exports.search_taxes = search_taxes;
