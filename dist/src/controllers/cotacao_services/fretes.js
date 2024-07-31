"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fretes = void 0;
const zimController_1 = require("./zimController");
const searatesController_1 = require("./searatesController");
const evergreenController_1 = require("./evergreenController");
const cmaController_1 = require("./cmaController");
const localController_1 = require("./localController");
const cached_service_1 = __importDefault(require("../../services/cached.service"));
const cachedController_1 = require("./cachedController");
const fretes = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "*");
    res.setHeader("Access-Control-Allow-Headers", "*");
    let response_freight;
    let response_cached = true;
    response_freight = [];
    response_freight = yield adicionar_servico(response_freight, req, res, cachedController_1.getCached);
    response_freight = yield adicionar_servico(response_freight, req, res, localController_1.local);
    if (response_freight.length === 0) {
        response_cached = false;
        response_freight = yield adicionar_servico(response_freight, req, res, searatesController_1.searates);
        response_freight = yield adicionar_servico(response_freight, req, res, zimController_1.zim);
        response_freight = yield adicionar_servico(response_freight, req, res, cmaController_1.cma);
        response_freight = yield adicionar_servico(response_freight, req, res, evergreenController_1.evergreen);
    }
    let msg_default = [
        {
            shipment_id: "1",
            tipo_container: "",
            id_tipo_container: "",
            porto_embarque: "TBI",
            id_porto_embarque: "",
            porto_descarga: "TBI",
            id_porto_descarga: "",
            armador: "MSC",
            id_armador: "",
            navio: "",
            data_embarque: "TBI",
            tempo_de_transito: "",
            data_chegada: "",
            frete: "",
            imagem_link: "/imagens/msc.png",
        },
        {
            shipment_id: "1",
            tipo_container: "",
            id_tipo_container: "",
            porto_embarque: "TBI",
            id_porto_embarque: "",
            porto_descarga: "TBI",
            id_porto_descarga: "",
            armador: "One",
            id_armador: "",
            navio: "",
            data_embarque: "TBI",
            tempo_de_transito: "",
            data_chegada: "",
            frete: "",
            imagem_link: "/imagens/one.png",
        },
        {
            shipment_id: "1",
            tipo_container: "",
            id_tipo_container: "",
            porto_embarque: "TBI",
            id_porto_embarque: "",
            porto_descarga: "TBI",
            id_porto_descarga: "",
            armador: "Hapag-Lloyd",
            id_armador: "",
            navio: "",
            data_embarque: "TBI",
            tempo_de_transito: "",
            data_chegada: "",
            frete: "",
            imagem_link: "/imagens/hapag.png",
        },
        {
            shipment_id: "1",
            tipo_container: "",
            id_tipo_container: "",
            porto_embarque: "TBI",
            id_porto_embarque: "",
            porto_descarga: "TBI",
            id_porto_descarga: "",
            armador: "Cosco Shipping",
            id_armador: "",
            navio: "",
            data_embarque: "TBI",
            tempo_de_transito: "",
            data_chegada: "",
            frete: "",
            imagem_link: "/imagens/cosco.png",
        },
    ];
    // response_freight = response_freight.concat(msg_default);
    if (response_freight.length === 0) {
        console.log({
            message: "[COTAÇÕES] Fretes nao encontrado.",
        });
        res.status(200).json([]);
    }
    else {
        if (!response_cached) {
            response_freight.forEach((result) => __awaiter(void 0, void 0, void 0, function* () {
                yield cached_service_1.default.insert(result);
            }));
        }
        res.status(200).json(response_freight);
    }
});
exports.fretes = fretes;
const adicionar_servico = (arr, req, res, service) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let res_service;
        res_service = yield service(req, res);
        res_service = res_service.concat(arr);
        return res_service;
    }
    catch (e) {
        return arr;
    }
});
