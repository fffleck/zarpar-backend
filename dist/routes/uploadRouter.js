"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const upload_1 = require("../controllers/upload/upload");
const upload_taxes_1 = require("../controllers/upload/upload_taxes");
const express_1 = __importDefault(require("express"));
const routes = express_1.default.Router();
// Filtros
routes.post('/files', upload_1.upload);
routes.post('/taxes', upload_taxes_1.upload_taxes);
exports.default = routes;