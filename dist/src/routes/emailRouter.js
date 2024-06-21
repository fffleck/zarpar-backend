"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const send_quotation_1 = require("./../controllers/email/send_quotation");
const send_analysis_1 = require("../controllers/email/send_analysis");
const send_client_1 = require("../controllers/email/send_client");
const express_1 = __importDefault(require("express"));
const routes = express_1.default.Router();
/**
 * @swagger
 * tags:
 *   name: Email
 *   description: Endpoints relacionados a envio de emails
 */
/**
 * @swagger
 * /email/send_analysis:
 *   post:
 *     summary: Envia uma análise por email
 *     tags: [Email]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 description: O email do destinatário
 *               analysisData:
 *                 type: object
 *                 description: Dados da análise
 *     responses:
 *       200:
 *         description: Análise enviada com sucesso
 *       400:
 *         description: Requisição inválida
 */
routes.post("/send_analysis", send_analysis_1.send_analysis);
/**
 * @swagger
 * /email/send_quotation:
 *   post:
 *     summary: Envia uma cotação por email
 *     tags: [Email]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 description: O email do destinatário
 *               quotationData:
 *                 type: object
 *                 description: Dados da cotação
 *     responses:
 *       200:
 *         description: Cotação enviada com sucesso
 *       400:
 *         description: Requisição inválida
 */
routes.post("/send_quotation", send_quotation_1.send_quotation);
/**
 * @swagger
 * /email/send_client:
 *   post:
 *     summary: Envia informações ao cliente por email
 *     tags: [Email]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 description: O email do destinatário
 *               clientData:
 *                 type: object
 *                 description: Dados do cliente
 *     responses:
 *       200:
 *         description: Informações enviadas com sucesso ao cliente
 *       400:
 *         description: Requisição inválida
 */
routes.post("/send_client", send_client_1.send_client);
exports.default = routes;
