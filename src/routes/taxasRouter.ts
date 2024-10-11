import express, { Router } from "express";
import { list_taxas } from "../controllers/taxes/list";
import { new_taxas } from "../controllers/taxes/new";

const routes: Router = express.Router();

routes.get("/list", list_taxas);
routes.post("/new", new_taxas);

export default routes;