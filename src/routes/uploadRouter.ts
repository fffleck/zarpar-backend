import { uploadxls } from "../controllers/upload/upload";
import express, { Router } from "express";
import { upload_taxes } from "../controllers/upload/upload_taxes";
import { uploadPdf } from "../controllers/upload/upload_bookings";
import upload from "../config/multer_config";
const routes: Router = express.Router();

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
routes.post('/files', uploadxls);
routes.post('/taxes', upload_taxes);
routes.post('/bookings', uploadPdf)

export default routes;
