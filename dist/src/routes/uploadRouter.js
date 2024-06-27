"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const upload_1 = require("../controllers/upload/upload");
const express_1 = __importDefault(require("express"));
const upload_taxes_1 = require("../controllers/upload/upload_taxes");
const routes = express_1.default.Router();
/**
 * @swagger
 * tags:
 *   name: Upload
 *   description: Endpoints relacionados ao upload de arquivos
 */
/**
 * @swagger
 * /upload/files:
 *   post:
 *     summary: Realiza o upload de arquivos
 *     tags: [Upload]
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               file:
 *                 type: string
 *                 format: binary
 *                 description: Arquivo a ser enviado
 *     responses:
 *       200:
 *         description: Upload realizado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: Mensagem de sucesso
 *                 url:
 *                   type: string
 *                   description: URL do arquivo enviado
 *       400:
 *         description: Requisição inválida
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   description: Mensagem de erro
 *       500:
 *         description: Erro interno do servidor
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   description: Mensagem de erro
 */
routes.post('/files', upload_1.upload);
routes.post('/taxes', upload_taxes_1.upload_taxes);
exports.default = routes;
