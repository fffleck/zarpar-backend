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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.analitcs_user = void 0;
const user_service_1 = __importDefault(require("../../services/user.service"));
const analitcs_user = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,POST');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    try {
        const users = yield user_service_1.default.getAll();
        if (users.length === 0) {
            return res.status(401).json({
                success: false,
                message: "Usuários não encontrados."
            });
        }
        const sanitizedUsers = users.map(user => {
            const _a = user.toObject(), { password } = _a, rest = __rest(_a, ["password"]);
            return rest;
        });
        return res.json({
            success: true,
            message: "Usuários localizados",
            list: sanitizedUsers
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
exports.analitcs_user = analitcs_user;
