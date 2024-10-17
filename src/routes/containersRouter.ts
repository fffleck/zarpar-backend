import express, { Router } from "express";
import { list_containers } from "../controllers/containers/list";
import { new_container } from "../controllers/containers/new";

const routes: Router = express.Router();

routes.get("/list", list_containers);
routes.post("/new", new_container);

export default routes;