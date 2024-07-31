"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Cached_1 = __importDefault(require("../models/Cached"));
const create = (body) => Cached_1.default.create(body);
const insert = (body) => Cached_1.default.findOneAndUpdate({ porto_embarque: body.porto_embarque,
    porto_descarga: body.porto_descarga,
    data_embarque: body.data_embarque,
    tipo_container: body.tipo_container,
    data_chegada: body.data_chegada,
    armador: body.armador,
    shipment_id: body.shipment_id,
    id_tipo_container: body.id_tipo_container,
    navio: body.navio,
    tempo_de_transito: body.tempo_de_transito
}, body, { new: true, upsert: true, setDefaultsOnInsert: true });
const getAll = () => Cached_1.default.find();
const getFreigth = (params) => Cached_1.default.find(params);
exports.default = {
    create,
    insert,
    getAll,
    getFreigth
};
