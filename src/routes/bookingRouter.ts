import express, { Router } from "express";
import { save_booking } from "../controllers/booking/save_booking";
import { save_quotation } from "../controllers/quotation/save_quotation";
import { list_booking } from "../controllers/booking/list_booking";
import { save_schedule } from "../controllers/booking/schedule_booking";
import { search_taxes } from "../controllers/taxes/search";
import { update_booking } from "../controllers/booking/update_booking";
import { send_email } from "../controllers/booking/sendEmail_booking";
import { edit_booking } from "../controllers/booking/edit_booking";

const routes: Router = express.Router();

routes.post("/save_booking", save_booking);
routes.post("/save_quotations", save_quotation);
routes.post("/list_booking", list_booking);
routes.post("/reservas", save_schedule);
routes.post("/taxes", search_taxes);
routes.post("/update", update_booking);
routes.post("/send_email", send_email);
routes.post("/edit/:id", edit_booking);

export default routes;
