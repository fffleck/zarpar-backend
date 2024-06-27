"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const db_1 = __importDefault(require("./database/db"));
const cors_1 = __importDefault(require("cors"));
const authRouter_1 = __importDefault(require("./routes/authRouter"));
const cotacaoRouter_1 = __importDefault(require("./routes/cotacaoRouter"));
const filtersRouter_1 = __importDefault(require("./routes/filtersRouter"));
const userRouter_1 = __importDefault(require("./routes/userRouter"));
const emailRouter_1 = __importDefault(require("./routes/emailRouter"));
const uploadRouter_1 = __importDefault(require("./routes/uploadRouter"));
const bookingRouter_1 = __importDefault(require("./routes/bookingRouter"));
const cotacoesNacRouter_1 = __importDefault(require("./routes/cotacoesNacRouter"));
// Importando Swagger
const swagger_1 = __importDefault(require("./swagger"));
class App {
    constructor() {
        this.server = (0, express_1.default)();
        (0, db_1.default)();
        this.middlewares();
        this.routes();
    }
    middlewares() {
        this.server.use(express_1.default.json());
        this.server.use((0, cors_1.default)());
    }
    routes() {
        this.server.use("/auth", authRouter_1.default);
        this.server.use("/cotacao", cotacaoRouter_1.default);
        this.server.use("/filters", filtersRouter_1.default);
        this.server.use("/user", userRouter_1.default);
        this.server.use("/email", emailRouter_1.default);
        this.server.use("/upload", uploadRouter_1.default);
        this.server.use("/booking", bookingRouter_1.default);
        this.server.use("/quotations", cotacoesNacRouter_1.default);
        this.server.use("/swagger", swagger_1.default); // Rota para a documentação do Swagger
    }
}
exports.default = new App().server;
