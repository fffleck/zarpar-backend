"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const list_quotation_1 = require("../controllers/quotation/list_quotation");
const get_quotation_1 = require("../controllers/quotation/get_quotation");
const update_quotation_1 = require("../controllers/quotation/update_quotation");
const routes = express_1.default.Router();
routes.get("/list", list_quotation_1.list_quotations);
routes.get("/consolida/:id", get_quotation_1.getQuotation);
routes.post("/update", update_quotation_1.update_quotation);
exports.default = routes;
