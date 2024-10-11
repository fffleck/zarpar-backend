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
exports.new_frete = void 0;
const frete_maritmo_service_1 = __importDefault(require("../../services/frete_maritmo.service"));
const moment_1 = __importDefault(require("moment"));
const new_frete = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', '*');
    res.setHeader('Access-Control-Allow-Headers', '*');
    const infsFreight = req.body;
    console.log("DADOS RECEBIDOS", infsFreight);
    let containers_str = "";
    if (infsFreight.container == "20' Standard") {
        containers_str = "20'DV";
    }
    if (infsFreight.container == "40' Standard") {
        containers_str = "40'DV";
    }
    if (infsFreight.container == "40' High Cube") {
        containers_str = "40'HQ";
    }
    const newFrete = {
        mercadoria: infsFreight.mercadoria,
        id_mercadoria: "1",
        tipo_mercadoria: infsFreight.mercadoria,
        id_tipo_mercadoria: "1",
        tipo_container: containers_str,
        id_tipo_container: containers_str == "40'DV" ? "2" : "1",
        porto_embarque: infsFreight.porto_embarque.split("-")[0].trim(),
        id_porto_embarque: "1",
        porto_descarga: infsFreight.porto_descarga.split("-")[0].trim(),
        id_porto_descarga: "2",
        armador: infsFreight.armador,
        id_armador: infsFreight.armador.toUpperCase() == "MAERSK" ? "1" :
            infsFreight.armador.toUpperCase() == "CMA-CGM" ? "2" :
                infsFreight.armador.toUpperCase() == "MSC" ? "3" :
                    infsFreight.armador.toUpperCase() == "EXALOG" ? "4" :
                        infsFreight.armador.toUpperCase() == "COSCO" ? "5" :
                            infsFreight.armador.toUpperCase() == "HAPAG" ? "6" :
                                infsFreight.armador.toUpperCase() == "ONE" ? "7" :
                                    infsFreight.armador.toUpperCase() == "HMM" ? "8" : "0",
        nome_navio: infsFreight.navio,
        data_embarque: (0, moment_1.default)(infsFreight.data_embarque, 'MM/DD/YYYY').toDate(),
        tempo_de_transito: infsFreight.tempo_de_transito,
        data_chegada: (0, moment_1.default)(infsFreight.data_chegada, 'MM/DD/YYYY').toDate(),
        base_freight: infsFreight.base_freight,
        bunker: infsFreight.bunker,
        isps: infsFreight.isps,
        transbordo: (_a = infsFreight.transbordo) !== null && _a !== void 0 ? _a : "Algiers"
    };
    const save_freight = yield frete_maritmo_service_1.default.create(newFrete);
    if (save_freight) {
        res.json({
            success: true,
            message: "Freight Cadastrado com sucesso"
        });
    }
    else {
        res.status(401).json({
            success: false,
            message: "Problema ao cadastrar novo Freight."
        });
    }
});
exports.new_frete = new_frete;
