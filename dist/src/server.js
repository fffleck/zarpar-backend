"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app_1 = __importDefault(require("./app")); // Configuração do servidor Express
const swagger_1 = __importDefault(require("./swagger")); // Configuração do Swagger
const cors_1 = __importDefault(require("cors"));
const find_user_1 = require("./controllers/user/find_user");
const path_1 = __importDefault(require("path"));
const PORT = process.env.PORT || 3334;
app_1.default.use((0, cors_1.default)());
app_1.default.use(express_1.default.json());
app_1.default.post('/find_user', find_user_1.find_user);
app_1.default.use('/files', express_1.default.static(path_1.default.resolve('files')));
app_1.default.use('/api', swagger_1.default); // Adiciona a rota para a documentação
app_1.default.listen(PORT, () => {
    console.log(`Server is running up port ${PORT}`);
});
