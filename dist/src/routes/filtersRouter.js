"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const filtersController_1 = require("../controllers/filtersController");
const express_1 = __importDefault(require("express"));
const routes = express_1.default.Router();
/**
 * @swagger
 * tags:
 *   name: Filtros
 *   description: Endpoints relacionados a filtros de mercadorias, portos e containers
 */
/**
 * @swagger
 * /filters/mercadorias:
 *   get:
 *     summary: Retorna a lista de mercadorias
 *     tags: [Filtros]
 *     responses:
 *       200:
 *         description: Lista de mercadorias retornada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: string
 *                     description: Identificador da mercadoria
 *                   name:
 *                     type: string
 *                     description: Nome da mercadoria
 *       500:
 *         description: Erro interno do servidor
 */
routes.get('/mercadorias', filtersController_1.mercadorias);
/**
 * @swagger
 * /filters/portos_descarga:
 *   get:
 *     summary: Retorna a lista de portos de descarga
 *     tags: [Filtros]
 *     responses:
 *       200:
 *         description: Lista de portos de descarga retornada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: string
 *                     description: Identificador do porto
 *                   name:
 *                     type: string
 *                     description: Nome do porto
 *       500:
 *         description: Erro interno do servidor
 */
routes.get('/portos_descarga', filtersController_1.portos_descarga);
/**
 * @swagger
 * /filters/portos_embarque:
 *   get:
 *     summary: Retorna a lista de portos de embarque
 *     tags: [Filtros]
 *     responses:
 *       200:
 *         description: Lista de portos de embarque retornada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: string
 *                     description: Identificador do porto
 *                   name:
 *                     type: string
 *                     description: Nome do porto
 *       500:
 *         description: Erro interno do servidor
 */
routes.get('/portos_embarque', filtersController_1.portos_embarque);
/**
 * @swagger
 * /filters/tipos_container:
 *   get:
 *     summary: Retorna a lista de tipos de container
 *     tags: [Filtros]
 *     responses:
 *       200:
 *         description: Lista de tipos de container retornada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: string
 *                     description: Identificador do tipo de container
 *                   description:
 *                     type: string
 *                     description: Descrição do tipo de container
 *       500:
 *         description: Erro interno do servidor
 */
routes.get('/tipos_container', filtersController_1.tipos_container);
/**
 * @swagger
 * /filters/tipos_mercadoria:
 *   get:
 *     summary: Retorna a lista de tipos de mercadoria
 *     tags: [Filtros]
 *     responses:
 *       200:
 *         description: Lista de tipos de mercadoria retornada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: string
 *                     description: Identificador do tipo de mercadoria
 *                   name:
 *                     type: string
 *                     description: Nome do tipo de mercadoria
 *       500:
 *         description: Erro interno do servidor
 */
routes.get('/tipos_mercadoria', filtersController_1.tipos_mercadoria);
routes.get('/armadores', filtersController_1.armadores);
routes.post('/ncms', filtersController_1.ncms);
exports.default = routes;
