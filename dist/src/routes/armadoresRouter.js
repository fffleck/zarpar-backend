"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const save_controller_1 = require("../controllers/armador/save.controller");
const list_controller_1 = require("../controllers/armador/list.controller");
const routes = express_1.default.Router();
routes.post('/save', save_controller_1.save_armadores);
routes.post('/list', list_controller_1.list_armadores);
exports.default = routes;
