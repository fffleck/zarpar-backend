import express, { Router } from "express";
import { list_fretes } from "../controllers/frete/list";
import { new_frete } from "../controllers/frete/new";

const routes: Router = express.Router();

routes.get("/list", list_fretes);
routes.post("/new", new_frete);

export default routes;
