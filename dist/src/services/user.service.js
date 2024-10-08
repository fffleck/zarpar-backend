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
const User_1 = __importDefault(require("../models/User"));
const UserToken_1 = __importDefault(require("../models/UserToken"));
// USER
const create = (body) => User_1.default.create(body);
const getByEmail = (emailRequerido) => User_1.default.find({ email: emailRequerido });
const getOneByEmail = (emailRequerido) => User_1.default.findOne({ email: emailRequerido });
const getAll = () => User_1.default.find();
const updatePassword = (emailRequerido, password) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield User_1.default.findOne({ email: emailRequerido });
    if (!user) {
        throw "Erro ao atualizar, usuario não encontrado.";
    }
    user.password = password;
    yield user.save();
});
// USER TOKEN
const getUserToken = (token) => UserToken_1.default.findOne({ token: token });
const updateUserToken = (usertoken) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield UserToken_1.default.findOne({ email: usertoken.email });
    if (!user) {
        yield UserToken_1.default.create(usertoken);
    }
    else {
        user.token = usertoken.token;
        yield user.save();
    }
});
const updateSearch = (email) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const user = yield User_1.default.findOne({ email: email });
    if (!user) {
        throw new Error("Erro ao atualizar, usuario não encontrado.");
    }
    else {
        user.telefone = (_a = user.telefone) !== null && _a !== void 0 ? _a : '99999999999';
        user.search = user.search ? user.search + 1 : 1;
        yield user.save();
    }
});
const updateCountLogin = (email) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield User_1.default.findOne({ email: email });
    if (!user) {
        throw new Error("Erro ao atualizar, usuário não encontrado.");
    }
    const now = new Date();
    const lastLogin = user.lastLogin || now; // Se não houver `lastLogin`, considere o login atual
    const sameMonthAndYear = now.getMonth() === lastLogin.getMonth() && now.getFullYear() === lastLogin.getFullYear();
    if (!sameMonthAndYear) {
        // Se o mês mudou, reinicie o contador
        user.countLogin = 1;
    }
    else {
        // Se o mês não mudou, incremente o contador
        user.countLogin = (user.countLogin || 0) + 1;
    }
    // Atualize a data de último login para a data atual
    user.lastLogin = now;
    // Salva as alterações no banco
    yield user.save();
});
exports.default = {
    create,
    getAll,
    getByEmail,
    getOneByEmail,
    getUserToken,
    updateUserToken,
    updatePassword,
    updateSearch,
    updateCountLogin,
};
