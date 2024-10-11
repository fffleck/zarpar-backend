"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const list_1 = require("../controllers/frete/list");
const new_1 = require("../controllers/frete/new");
const routes = express_1.default.Router();
routes.get("/list", list_1.list_fretes);
routes.post("/new", new_1.new_frete);
exports.default = routes;
