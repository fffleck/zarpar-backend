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
exports.uploadxls = void 0;
const xlsx_1 = __importDefault(require("xlsx"));
const frete_maritmo_service_1 = __importDefault(require("../../services/frete_maritmo.service"));
const uploadxls = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', '*');
    res.setHeader('Access-Control-Allow-Headers', '*');
    const { data } = req.body;
    const base64Buffer = Buffer.from(data.split(',')[1], 'base64');
    const workbook = xlsx_1.default.read(base64Buffer, { type: 'buffer' });
    const sheet = workbook.Sheets[workbook.SheetNames[0]];
    const dataFromExcel = xlsx_1.default.utils.sheet_to_json(sheet, { raw: false, dateNF: 'dd/mm/yyyy' });
    let total_registros = 0;
    let total_importados = 0;
    let name_arquivo = null;
    let save_frete = null;
    for (const row of dataFromExcel) {
        const { Mercadoria: mercadoria, 'Tipo de Mercadoria': tipo_mercadoria, 'Tipo de Container': tipo_container, 'Porto de Embarque': porto_embarque, 'Porto de Descarga': porto_descarga, 'Data de Embarque': data_embarque, 'Cia Maritima': armador, 'Navio': navio, 'Transit Time': tempo_de_transito, 'Data Chegada': data_chegada, 'Base Frete': base_freight, 'Bunker': bunker, 'ISPS': isps, 'Transbordo': transbordo } = row;
        const dia_embarque = data_embarque.split("/")[1];
        const mes_embarque = data_embarque.split("/")[0];
        const ano_embarque = data_embarque.split("/")[2];
        let new_dia_embarque = dia_embarque;
        let new_mes_embarque = mes_embarque;
        if (mes_embarque < 10) {
            new_mes_embarque = ("00" + mes_embarque).slice(-2);
        }
        if (dia_embarque < 10) {
            new_dia_embarque = ("00" + dia_embarque).slice(-2);
        }
        const dia_chegada = data_chegada.split("/")[0];
        const mes_chegada = data_chegada.split("/")[1];
        const ano_chegada = data_chegada.split("/")[2];
        let new_mes_chegada = mes_chegada;
        if (mes_chegada < 10) {
            new_mes_chegada = ("00" + mes_chegada).slice(-2);
        }
        const new_data_embarque = new_dia_embarque + '/' + new_mes_embarque + '/' + ano_embarque;
        const new_data_chegada = dia_chegada + '/' + new_mes_chegada + '/' + ano_chegada;
        const new_porto_descarga = porto_descarga.split("-")[0];
        const newFrete = {
            mercadoria: mercadoria,
            id_mercadoria: "1",
            tipo_mercadoria: tipo_mercadoria,
            id_tipo_mercadoria: "1",
            tipo_container: tipo_container,
            id_tipo_container: tipo_container == "40'DV" ? "2" : "1",
            porto_embarque: porto_embarque,
            id_porto_embarque: "1",
            porto_descarga: new_porto_descarga.trim(),
            id_porto_descarga: "2",
            armador: armador,
            id_armador: armador.toUpperCase() == "MAERSK" ? "1" :
                armador.toUpperCase() == "CMA-CGM" ? "2" :
                    armador.toUpperCase() == "MSC" ? "3" :
                        armador.toUpperCase() == "EXALOG" ? "4" :
                            armador.toUpperCase() == "COSCO" ? "5" :
                                armador.toUpperCase() == "HAPAG" ? "6" :
                                    armador.toUpperCase() == "ONE" ? "7" :
                                        armador.toUpperCase() == "HMM" ? "8" : "0",
            nome_navio: navio,
            data_embarque: new_data_embarque,
            tempo_de_transito: tempo_de_transito,
            data_chegada: new_data_chegada,
            base_freight: base_freight,
            bunker: bunker,
            isps: isps,
            transbordo: transbordo
        };
        total_registros++;
        name_arquivo = armador;
        save_frete = yield frete_maritmo_service_1.default.create(newFrete);
        if (save_frete) {
            total_importados++;
        }
    }
    if (save_frete) {
        res.json({
            success: true,
            arquivo: name_arquivo,
            total_registros: total_registros,
            total_importados: total_importados,
        });
    }
    else {
        res.status(403).json({
            success: false,
            message: "Problema ao gravar fretes."
        });
    }
});
exports.uploadxls = uploadxls;
