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
exports.find_user = void 0;
const user_service_1 = __importDefault(require("../../services/user.service"));
const find_user = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', '*');
    res.setHeader('Access-Control-Allow-Headers', '*');
    const email = req.body.email;
    try {
        const users = yield user_service_1.default.getByEmail(email);
        if (users.length === 0) {
            return res.status(401).json({
                success: false,
                message: "Usuário não encontrado."
            });
        }
        const user = users[0];
        return res.json({
            success: true,
            message: "Usuário localizado",
            user: user
        });
    }
    catch (error) {
        console.error("Erro ao localizar usuário:", error);
        return res.status(500).json({
            success: false,
            message: "Erro interno do servidor."
        });
    }
});
exports.find_user = find_user;
