"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const booking_1 = require("../controllers/booking/save_booking")
const booking_list_1 = require("../controllers/booking/list_booking")
const booking_schedule_1 = require("../controllers/booking/schedule_booking")
const booking_email_1 = require("../controllers/booking/sendEmail_booking")

const express_1 = __importDefault(require("express"));
const routes = express_1.default.Router();
// Filtros
routes.post('/save_booking', booking_1.save_booking);
routes.post('/list_booking', booking_list_1.list_booking);
routes.post('/reservas', booking_schedule_1.save_schedule);
routes.post('/send_email', booking_email_1.send_email);

exports.default = routes;
