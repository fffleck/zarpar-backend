import express, { Router } from "express";
import { list_quotations } from "../controllers/quotation/list_quotation";
import { getQuotation } from "../controllers/quotation/get_quotation";
import { update_quotation } from "../controllers/quotation/update_quotation";
const routes: Router = express.Router();

routes.get("/list", list_quotations);
routes.get("/consolida/:id", getQuotation);
routes.post("/update", update_quotation )

export default routes;
