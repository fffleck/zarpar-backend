import { register } from '../controllers/user/register';
import { find_user } from '../controllers/user/find_user';
import { add_search } from '../controllers/user/add_search';
import express, { Router } from "express";
import { analitcs_user } from '../controllers/user/analitics';

const routes: Router = express.Router();

/**
 * @swagger
 * tags:
 *   name: User
 *   description: Endpoints relacionados aos usuários
 */

/**
 * @swagger
 * /user/register:
 *   post:
 *     summary: Registra um novo usuário
 *     tags: [User]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *                 description: Nome de usuário
 *                 example: "user123"
 *               password:
 *                 type: string
 *                 description: Senha do usuário
 *                 example: "password123"
 *               email:
 *                 type: string
 *                 description: E-mail do usuário
 *                 example: "user@example.com"
 *     responses:
 *       201:
 *         description: Usuário registrado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                   description: ID do usuário registrado
 *                   example: "605c72c2a66c2b001c5b5b7d"
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
 *                   example: "Nome de usuário já existe"
 */
routes.post('/register', register);

/**
 * @swagger
 * /user/find_user:
 *   post:
 *     summary: Encontra um usuário pelo ID ou pelo e-mail
 *     tags: [User]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id:
 *                 type: string
 *                 description: ID do usuário
 *                 example: "605c72c2a66c2b001c5b5b7d"
 *               email:
 *                 type: string
 *                 description: E-mail do usuário
 *                 example: "user@example.com"
 *     responses:
 *       200:
 *         description: Usuário encontrado
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                   description: ID do usuário
 *                   example: "605c72c2a66c2b001c5b5b7d"
 *                 username:
 *                   type: string
 *                   description: Nome de usuário
 *                   example: "user123"
 *                 email:
 *                   type: string
 *                   description: E-mail do usuário
 *                   example: "user@example.com"
 *       404:
 *         description: Usuário não encontrado
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   description: Mensagem de erro
 *                   example: "Usuário não encontrado"
 */
routes.post('/find_user', find_user);

/**
 * @swagger
 * /user/add_search:
 *   post:
 *     summary: Adiciona uma pesquisa ao perfil do usuário
 *     tags: [User]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               userId:
 *                 type: string
 *                 description: ID do usuário
 *                 example: "605c72c2a66c2b001c5b5b7d"
 *               searchQuery:
 *                 type: string
 *                 description: Consulta de pesquisa
 *                 example: "Pesquisa de exemplo"
 *     responses:
 *       200:
 *         description: Pesquisa adicionada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: Mensagem de sucesso
 *                   example: "Pesquisa adicionada ao usuário"
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
 *                   example: "ID de usuário inválido"
 */
routes.post('/add_search', add_search);

routes.post('/analitics', analitcs_user);

export default routes;
