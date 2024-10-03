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
const moment_1 = __importDefault(require("moment"));
const armador_login_service_1 = __importDefault(require("../../services/armador_login.service"));
const Robot_1 = __importDefault(require("../../models/Robot"));
const mercadoria_service_1 = __importDefault(require("../../services/mercadoria.service"));
const porto_service_1 = __importDefault(require("../../services/porto.service"));
const tipo_container_service_1 = __importDefault(require("../../services/tipo_container.service"));
const fretes = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b;
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "*");
    res.setHeader("Access-Control-Allow-Headers", "*");
    const email = typeof req.query.email === 'string' ? req.query.email : '';
    const tipo_mercadoria = typeof req.query.mercadoria === 'string' ? req.query.mercadoria : '1';
    let response_freight;
    let response_filter;
    let response_cached = false;
    response_freight = [];
    response_filter = [];
    let data_saida_formatada;
    const credencialsRobotMaersk = yield armador_login_service_1.default.getCredencialsArmadorEmail('Maersk', email);
    const objMercadoria = yield mercadoria_service_1.default.getAll(); // Quando mudar para o plano enterprise tem que revisar isso 
    const objPortoOrigem = yield porto_service_1.default.getOne(typeof req.query.porto_embarque === 'string' ? req.query.porto_embarque : 'ND');
    const objPortoDestino = yield porto_service_1.default.getOne(typeof req.query.porto_descarga === 'string' ? req.query.porto_descarga : 'ND');
    const objContainer = yield tipo_container_service_1.default.getOne(typeof req.query.tipo_container === 'string' ? req.query.tipo_container : 'ND');
    if (credencialsRobotMaersk && objMercadoria && objPortoOrigem && objPortoDestino && objContainer) {
        const dadosRobot = new Robot_1.default();
        dadosRobot.porto_origem = objPortoOrigem.port_name;
        dadosRobot.porto_origem_country = objPortoOrigem.country;
        dadosRobot.porto_destino = objPortoDestino.port_name;
        dadosRobot.porto_destino_country = objPortoDestino.country;
        dadosRobot.mercadoria = objMercadoria[0].name;
        dadosRobot.qtd_container = 1;
        dadosRobot.type_container = objContainer.name;
        dadosRobot.peso_container = objContainer.weight;
        dadosRobot.data_embarque = typeof req.query.data_saida === 'string' ? req.query.data_saida : (0, moment_1.default)(moment_1.default.now()).format('YYYY-MM-DD');
        dadosRobot.user = (_a = credencialsRobotMaersk === null || credencialsRobotMaersk === void 0 ? void 0 : credencialsRobotMaersk.user) !== null && _a !== void 0 ? _a : 'ND';
        dadosRobot.password = (_b = credencialsRobotMaersk === null || credencialsRobotMaersk === void 0 ? void 0 : credencialsRobotMaersk.password) !== null && _b !== void 0 ? _b : 'ND';
        yield dadosRobot.save();
    }
    // response_freight = await adicionar_servico(response_freight, req, res, getCached)
    // if (response_freight.length === 0 ) {
    //   response_cached = false;
    response_freight = yield adicionar_servico(response_freight, req, res, cmaController_1.cma);
    response_freight = yield adicionar_servico(response_freight, req, res, searatesController_1.searates);
    response_freight = yield adicionar_servico(response_freight, req, res, zimController_1.zim);
    response_freight = yield adicionar_servico(response_freight, req, res, evergreenController_1.evergreen);
    response_freight = yield adicionar_servico(response_freight, req, res, localController_1.local);
    // }
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
                result.email = email;
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
