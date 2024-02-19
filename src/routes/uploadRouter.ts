import { files } from '../controllers/upload/uploadController';
import express, { Router } from "express";
const routes:Router = express.Router();

routes.post('/files', files);

export default routes;
