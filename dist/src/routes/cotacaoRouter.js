"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cmaController_1 = require("../controllers/cotacao_services/cmaController");
const fretes_1 = require("../controllers/cotacao_services/fretes");
const searatesController_1 = require("../controllers/cotacao_services/searatesController");
const zimController_1 = require("../controllers/cotacao_services/zimController");
const evergreenController_1 = require("../controllers/cotacao_services/evergreenController");
const express_1 = __importDefault(require("express"));
const routes = express_1.default.Router();
/**
 * @swagger
 * tags:
 *   name: Cotacao
 *   description: Endpoints relacionados aos serviços de cotação
 */
/**
 * @swagger
 * /cotacao/fretes:
 *   get:
 *     summary: Retorna todos os fretes
 *     tags: [Cotacao]
 *     responses:
 *       200:
 *         description: Lista de todos os fretes
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: string
 *                     description: ID do frete
 *                   origem:
 *                     type: string
 *                     description: Origem do frete
 *                   destino:
 *                     type: string
 *                     description: Destino do frete
 *                   preco:
 *                     type: number
 *                     description: Preço do frete
 *       400:
 *         description: Solicitação inválida
 */
routes.get("/fretes", fretes_1.fretes);
/**
 * @swagger
 * /cotacao/searates:
 *   get:
 *     summary: Retorna fretes da Searates
 *     tags: [Cotacao]
 *     responses:
 *       200:
 *         description: Lista de fretes da Searates
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: string
 *                     description: ID do frete
 *                   origem:
 *                     type: string
 *                     description: Origem do frete
 *                   destino:
 *                     type: string
 *                     description: Destino do frete
 *                   preco:
 *                     type: number
 *                     description: Preço do frete
 *       400:
 *         description: Solicitação inválida
 */
routes.get("/searates", searatesController_1.searatesController);
/**
 * @swagger
 * /cotacao/zim:
 *   get:
 *     summary: Retorna fretes da ZIM
 *     tags: [Cotacao]
 *     responses:
 *       200:
 *         description: Lista de fretes da ZIM
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: string
 *                     description: ID do frete
 *                   origem:
 *                     type: string
 *                     description: Origem do frete
 *                   destino:
 *                     type: string
 *                     description: Destino do frete
 *                   preco:
 *                     type: number
 *                     description: Preço do frete
 *       400:
 *         description: Solicitação inválida
 */
routes.get("/zim", zimController_1.zimController);
/**
 * @swagger
 * /cotacao/evergreen:
 *   get:
 *     summary: Retorna fretes da Evergreen
 *     tags: [Cotacao]
 *     responses:
 *       200:
 *         description: Lista de fretes da Evergreen
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: string
 *                     description: ID do frete
 *                   origem:
 *                     type: string
 *                     description: Origem do frete
 *                   destino:
 *                     type: string
 *                     description: Destino do frete
 *                   preco:
 *                     type: number
 *                     description: Preço do frete
 *       400:
 *         description: Solicitação inválida
 */
routes.get("/evergreen", evergreenController_1.evergreenController);
/**
 * @swagger
 * /cotacao/cma:
 *   get:
 *     summary: Retorna fretes da CMA
 *     tags: [Cotacao]
 *     responses:
 *       200:
 *         description: Lista de fretes da CMA
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: string
 *                     description: ID do frete
 *                   origem:
 *                     type: string
 *                     description: Origem do frete
 *                   destino:
 *                     type: string
 *                     description: Destino do frete
 *                   preco:
 *                     type: number
 *                     description: Preço do frete
 *       400:
 *         description: Solicitação inválida
 */
routes.get("/cma", cmaController_1.cmaController);
exports.default = routes;
