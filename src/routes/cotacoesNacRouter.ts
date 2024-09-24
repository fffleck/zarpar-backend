import express, { Router } from "express";
import { list_quotations } from "../controllers/quotation/list_quotation";
import { getQuotation } from "../controllers/quotation/get_quotation";
import { update_quotation } from "../controllers/quotation/update_quotation";
import { list_mynacs } from "../controllers/quotation/my_quotatios";
import { getListQuotations } from "../controllers/quotation/get_listquotations";
import { finaliza_quotation } from "../controllers/quotation/finaliza_quotations";
const routes: Router = express.Router();

routes.get("/list", list_quotations);
routes.get("/mynacs/:email", list_mynacs);
routes.get("/consolida/:id", getQuotation);
routes.get("/lists/nac/:id", getListQuotations);
routes.post("/update", update_quotation )
routes.post("/finaliza", finaliza_quotation )

export default routes;
