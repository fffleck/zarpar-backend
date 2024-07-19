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
exports.register = void 0;
const user_service_1 = __importDefault(require("../../services/user.service"));
const User_1 = __importDefault(require("../../models/User"));
var CryptoJS = require("crypto-js");
const register = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', '*');
    res.setHeader('Access-Control-Allow-Headers', '*');
    const userData = req.body.userData;
    const newUser = new User_1.default;
    newUser.name = userData.nomeCompleto;
    newUser.enterpriseName = userData.nomeEmpresa;
    newUser.address = userData.endereco;
    newUser.city = userData.cidade;
    newUser.state = userData.estado;
    newUser.zipCode = userData.cep;
    newUser.email = userData.email;
    newUser.search = 0;
    newUser.password = CryptoJS.MD5(userData.senha).toString(CryptoJS.enc.Hex); //Converte a senha para MD5
    newUser.telefone = userData.telefone.replace("(", "").replace(")", "").replaceAll(" ", "");
    user_service_1.default.create(newUser)
        .then((id) => {
        return res.status(200).json({
            success: true,
            errorCode: 0,
            message: "Usuário cadastrado com sucesso."
        });
    })
        .catch(err => {
        if (err.name === 'MongoServerError' && err.code === 11000) {
            // Duplicate e-mail
            return res.status(422).send({ succes: false, errorCode: err.code, message: 'E-mail já cadastrado!' });
        }
        else {
            console.log('ERRO ', err.message);
            return res.status(500).json({ success: false, errorCode: err.code, message: "Problema ao cadastrar usuário" });
        }
    });
});
exports.register = register;
