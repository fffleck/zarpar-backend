import express, { Router } from "express";
import { list_portos } from "../controllers/portos/list";
import { new_porto } from "../controllers/portos/new";

const routes: Router = express.Router();

routes.get("/list", list_portos);
routes.post("/new", new_porto);

export default routes;