"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const booking_1 = require("../controllers/booking/save_booking")
const booking_list_1 = require("../controllers/booking/list_booking")
const booking_edit_1 = require("../controllers/booking/edit_booking")
const booking_schedule_1 = require("../controllers/booking/schedule_booking")
const booking_save_1 = require("../controllers/booking/update_booking")
const booking_email_1 = require("../controllers/booking/sendEmail_booking")
const taxes_list = require("../controllers/taxes/search")
const quotation_save_1 = require("../controllers/quotation/save_quotation")

const express_1 = __importDefault(require("express"));
const routes = express_1.default.Router();
// Filtros
routes.post('/save_booking', booking_1.save_booking);
routes.post('/save_quotation', quotation_save_1.save_quotation);
routes.post('/list_booking', booking_list_1.list_booking);
routes.post('/reservas', booking_schedule_1.save_schedule);
routes.post('/taxes', taxes_list.search_taxes);
routes.post('/update', booking_save_1.update_booking);
routes.post('/send_email', booking_email_1.send_email);
routes.get('/edit/:id', booking_edit_1.edit_booking);


exports.default = routes;
