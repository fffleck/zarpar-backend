import { cmaController } from "../controllers/cotacao_services/cmaController";
import { fretes } from "../controllers/cotacao_services/fretes";
import { searatesController } from "../controllers/cotacao_services/searatesController";
import { zimController } from "../controllers/cotacao_services/zimController";
import { evergreenController } from "../controllers/cotacao_services/evergreenController";
import express, { Router } from "express";
const routes: Router = express.Router();

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
routes.get("/fretes", fretes);

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
routes.get("/searates", searatesController);

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
routes.get("/zim", zimController);

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
routes.get("/evergreen", evergreenController);

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
routes.get("/cma", cmaController);

export default routes;
