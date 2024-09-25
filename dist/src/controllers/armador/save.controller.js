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
exports.save_armadores = void 0;
const armador_login_service_1 = __importDefault(require("../../services/armador_login.service"));
const ArmadorLogin_1 = __importDefault(require("../../models/ArmadorLogin"));
const save_armadores = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', '*');
    res.setHeader('Access-Control-Allow-Headers', '*');
    const infsArmadorLogin = req.body;
    const dataArmador = new ArmadorLogin_1.default();
    let salvou = false;
    dataArmador.armador = infsArmadorLogin.nome_armador;
    dataArmador.user = infsArmadorLogin.login;
    dataArmador.password = infsArmadorLogin.password;
    dataArmador.email = infsArmadorLogin.email;
    dataArmador.status = infsArmadorLogin.status;
    const existArmador = yield armador_login_service_1.default.getExistArmador(infsArmadorLogin.nome_armador, infsArmadorLogin.email);
    if (existArmador > 0) {
        yield armador_login_service_1.default.update(dataArmador);
        salvou = true;
    }
    else {
        yield armador_login_service_1.default.create(dataArmador);
        salvou = true;
    }
    if (salvou) {
        res.json({
            success: true,
            message: "Dados cadastrados com sucesso"
        });
    }
    else {
        res.status(401).json({
            success: false,
            message: "Problema ao cadastrar dados do armador."
        });
    }
});
exports.save_armadores = save_armadores;
