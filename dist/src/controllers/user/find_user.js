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
Object.defineProperty(exports, "__esModule", { value: true });
exports.find_user = void 0;
const find_user = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', '*');
    res.setHeader('Access-Control-Allow-Headers', '*');
    const email = req.body.email;
    // const user = await userService.getByEmail(email);
    const user = null;
    res.json({ succes: false, message: "Passou aqui" });
    if (user) {
        const usuarioLocalizado = user[0];
        res.json({
            success: true,
            message: "Usuário localizado",
            user: usuarioLocalizado
        });
    }
    else {
        res.status(401).json({
            success: false,
            message: "Problema ao localizar usuário."
        });
    }
});
exports.find_user = find_user;
