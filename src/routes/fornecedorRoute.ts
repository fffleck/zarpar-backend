import express, { Router } from "express";
import { list_fornecedor } from "../controllers/fornecedor/list";
import { add_fornecedor } from "../controllers/fornecedor/add";
import { del_fornecedor } from "../controllers/fornecedor/delete";
const routes: Router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Forncedor
 *   description: Endpoints relacionados Forncedores de Usuarios
 */

/**
 * @swagger
 * /forncedor/add:
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
 *         description: Cadastro realizado com sucesso
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
 
routes.post('/add', add_fornecedor);
routes.post('/list/', list_fornecedor);
routes.post('/del/', del_fornecedor);

export default routes;
