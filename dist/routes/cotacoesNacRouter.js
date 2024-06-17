"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const quotationsNAC_1 = require("../controllers/quotation/list_quotation")
const quotationsNAC_2 = require("../controllers/quotation/get_quotation")
const quotation_update = require("../controllers/quotation/update_quotations")
const express_1 = __importDefault(require("express"));
const routes = express_1.default.Router();
// Cotação Services
routes.get("/list", quotationsNAC_1.list_quotations); //retorna lista de cotacoes NAC
routes.get('/consolida/:id', quotationsNAC_2.getQuotation);
routes.post('/update', quotation_update.update_quotation);

exports.default = routes;
