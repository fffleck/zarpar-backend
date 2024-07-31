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
exports.getCached = exports.cachedController = void 0;
const porto_service_1 = __importDefault(require("../../services/porto.service"));
const cached_service_1 = __importDefault(require("../../services/cached.service"));
const cachedController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "*");
    res.setHeader("Access-Control-Allow-Headers", "*");
    let response_freight;
    response_freight = yield (0, exports.getCached)(req, res);
    if (response_freight.length === 0) {
        res.status(200).json({
            message: "Frete nao encontrado.",
        });
    }
    else {
        res.status(200).json(response_freight);
    }
});
exports.cachedController = cachedController;
const getCached = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
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
        let data_1 = new Date(data_saida);
        let data_limite = new Date();
        data_limite.setDate(data_1.getDate() + 10);
        let frete_cached = yield cached_service_1.default.getFreigth({ porto_embarque: pe_obj === null || pe_obj === void 0 ? void 0 : pe_obj.port_name, porto_descarga: pd_obj === null || pd_obj === void 0 ? void 0 : pd_obj.port_name, tipo_container: tipo_container,
            $expr: {
                $and: [
                    { $gte: [{ $dateFromString: { dateString: "$data_embarque", format: "%d/%m/%Y" } }, new Date(data_saida)] },
                    { $lte: [{ $dateFromString: { dateString: "$data_embarque", format: "%d/%m/%Y" } }, new Date(data_limite)] }
                ]
            } });
        if (frete_cached.length >= 1) {
            frete_cached.forEach((linha) => {
                var _a, _b;
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
                    data_embarque: linha.data_embarque,
                    tempo_de_transito: linha.tempo_de_transito,
                    data_chegada: linha.data_chegada,
                    base_freight: parseFloat(linha.base_freight),
                    bunker: (_a = linha.bunker) !== null && _a !== void 0 ? _a : 0,
                    isps: (_b = linha.isps) !== null && _b !== void 0 ? _b : 0,
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
        console.log("Não existe frete local para esta pesquisa.");
        return [];
    }
});
exports.getCached = getCached;
