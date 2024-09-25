import express, { Router } from "express";
import { save_armadores } from "../controllers/armador/save.controller";
import { list_armadores } from "../controllers/armador/list.controller";
const routes: Router = express.Router();


routes.post('/save', save_armadores);
routes.post('/list', list_armadores);


export default routes;
