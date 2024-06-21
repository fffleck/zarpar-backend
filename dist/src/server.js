"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app")); // Configuração do servidor Express
const swagger_1 = __importDefault(require("./swagger")); // Configuração do Swagger
const PORT = process.env.PORT || 3334;
app_1.default.use('/api', swagger_1.default); // Adiciona a rota para a documentação
app_1.default.listen(PORT, () => {
    console.log(`Server is running up port ${PORT}`);
});
