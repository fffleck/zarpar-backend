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
exports.local = exports.localController = void 0;
const porto_service_1 = __importDefault(require("../../services/porto.service"));
const frete_maritmo_service_1 = __importDefault(require("../../services/frete_maritmo.service"));
const moment_1 = __importDefault(require("moment"));
const localController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "*");
    res.setHeader("Access-Control-Allow-Headers", "*");
    let response_freight;
    response_freight = yield (0, exports.local)(req, res);
    if (response_freight.length === 0) {
        res.status(200).json({
            message: "Frete nao encontrado.",
        });
    }
    else {
        res.status(200).json(response_freight);
    }
});
exports.localController = localController;
const local = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { data_saida, porto_embarque, porto_descarga, tipo_container, } = req.query;
    if (!data_saida || !porto_embarque || !porto_descarga || !tipo_container) {
        return [];
    }
    let response_freight;
    response_freight = [];
    try {
        let portos = yield porto_service_1.default.getAll();
        let pe_obj = portos.find((porto) => porto.port_id.trim() === porto_embarque.trim());
        let pd_obj = portos.find((porto) => porto.port_id.trim() === porto_descarga.trim());
        let containers_str = "";
        if (tipo_container == "ST20") {
            containers_str = "20'DV";
        }
        if (tipo_container == "ST40") {
            containers_str = "40'DV";
        }
        if (tipo_container == "HQ40") {
            containers_str = "40'HQ";
        }
        let porto_embarque_1 = pe_obj === null || pe_obj === void 0 ? void 0 : pe_obj.port_id.split("/")[1];
        let porto_descarga_1 = pd_obj === null || pd_obj === void 0 ? void 0 : pd_obj.port_id.split("/")[1];
        let data_limite = (0, moment_1.default)(data_saida).add(10, 'days').format('DD/MM/YYYY');
        let data_inicial = (0, moment_1.default)(data_saida).format('DD/MM/YYYY');
        console.log("PORTO ORIGEM ", porto_embarque);
        console.log("PORTO DETINO", porto_descarga);
        console.log("DATA INICIAL", (0, moment_1.default)(data_inicial, "DD/MM/YYYY").toDate());
        console.log("DATA FINAL", (0, moment_1.default)(data_limite, "DD/MM/YYYY").toDate());
        let fretes_banco = yield frete_maritmo_service_1.default.getOne({
            porto_embarque: porto_embarque_1 === null || porto_embarque_1 === void 0 ? void 0 : porto_embarque_1.trim(),
            porto_descarga: porto_descarga_1 === null || porto_descarga_1 === void 0 ? void 0 : porto_descarga_1.trim(),
            tipo_container: containers_str,
            data_embarque: {
                $gte: (0, moment_1.default)(data_inicial, "DD/MM/YYYY").toDate(),
                $lte: (0, moment_1.default)(data_limite, "DD/MM/YYYY").toDate()
            }
        });
        if (fretes_banco.length >= 1) {
            fretes_banco.forEach((linha) => {
                response_freight.push({
                    shipment_id: linha._id,
                    tipo_container: linha.tipo_container,
                    id_tipo_container: linha.id_tipo_container,
                    porto_embarque: linha.porto_embarque,
                    id_porto_embarque: linha.id_porto_embarque,
                    porto_descarga: linha.porto_descarga,
                    id_porto_descarga: linha.id_porto_descarga,
                    armador: linha.armador,
                    id_armador: linha.id_armador,
                    navio: linha.nome_navio,
                    data_embarque: (0, moment_1.default)(linha.data_embarque).format('DD/MM/YYYY'),
                    tempo_de_transito: linha.tempo_de_transito,
                    data_chegada: (0, moment_1.default)(linha.data_chegada).format('DD/MM/YYYY'),
                    base_freight: parseFloat(linha.base_freight),
                    bunker: parseFloat(linha.bunker),
                    isps: parseFloat(linha.isps),
                    imagem_link: ` - `,
                });
            });
        }
        if (response_freight.length === 0) {
            return [];
        }
        else {
            return response_freight;
        }
    }
    catch (error) {
        console.log("ERRO", error);
        console.log("Não existe frete local para esta pesquisa.");
        return [];
    }
});
exports.local = local;
