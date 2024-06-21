"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const swagger_jsdoc_1 = __importDefault(require("swagger-jsdoc"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const app = (0, express_1.default)();
const swaggerOptions = {
    swaggerDefinition: {
        openapi: '3.0.0',
        info: {
            title: 'Zarpar Shipping Backend API',
            version: '1.0.0',
            description: 'API documentation for the Zarpar Shipping Backend',
        },
        servers: [
            {
                url: 'http://localhost:3334',
                description: 'Development server',
            },
        ],
    },
    apis: [path_1.default.join(__dirname, 'routes', '*.{ts,js}')], // Caminho absoluto
};
const swaggerDocs = (0, swagger_jsdoc_1.default)(swaggerOptions);
app.use('/', swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swaggerDocs));
exports.default = app;
