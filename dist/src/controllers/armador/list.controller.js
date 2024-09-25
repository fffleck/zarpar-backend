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
exports.list_armadores = void 0;
const armador_login_service_1 = __importDefault(require("../../services/armador_login.service"));
const list_armadores = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', '*');
    res.setHeader('Access-Control-Allow-Headers', '*');
    const email = req.body.email;
    let listArmadores = [];
    listArmadores = yield armador_login_service_1.default.getByEmail(email);
    if (listArmadores.length) {
        res.json({
            success: true,
            message: "Armadores Encontrados",
            list: listArmadores
        });
    }
    else {
        res.json({
            success: true,
            message: "Armadores não Encontrado",
            list: []
        });
    }
});
exports.list_armadores = list_armadores;
