"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.local = exports.localController = void 0;
const porto_service_1 = require("../../services/porto.service");
const frete_maritimo_service_1 = require("../../services/frete_maritmo.service");
const armador_service_1 = require("../../services/armador.service");

const utils_1 = require("../../utils");
const localController = (req, res) => {
    const { data_saida, porto_embarque, porto_descarga, mercadoria, tipo_container, } = req.query;
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "*");
    res.setHeader("Access-Control-Allow-Headers", "*");
    exports.local(req, res)
        .then(response_freight => {
        if (response_freight.length === 0) {
            res.status(200).json({
                message: "[local] Frete nao encontrado.",
            });
        }
        else {
            res.status(200).json(response_freight);
        }
    })
        .catch(error => {
        console.error('Erro:', error);
        res.status(500).json({ error: 'Erro interno do servidor' });
    });
};
exports.localController = localController;
const local = async (req, res) => {
    const { data_saida, porto_embarque, porto_descarga, mercadoria, tipo_container, } = req.query;
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "*");
    res.setHeader("Access-Control-Allow-Headers", "*");
    if (!data_saida || !porto_embarque || !porto_descarga || !tipo_container) {
        return [];
    }
    try {
        let portos = await porto_service_1.default.getAll();
        let pe_obj = portos.find((porto) => porto.port_id.trim() === porto_embarque.trim());
        let pd_obj = portos.find((porto) => porto.port_id.trim() === porto_descarga.trim());
        let from = { lat: pe_obj === null || pe_obj === void 0 ? void 0 : pe_obj.lat_float, long: pe_obj === null || pe_obj === void 0 ? void 0 : pe_obj.lon_float };
        let to = { lat: pd_obj === null || pd_obj === void 0 ? void 0 : pd_obj.lat_float, long: pd_obj === null || pd_obj === void 0 ? void 0 : pd_obj.lon_float };
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
        let porto_embarque_1 = pe_obj.port_id.split("/")[1];
        let porto_descarga_1 = pd_obj.port_id.split("/")[1];
        let data_1 = new Date(data_saida);
        let data_limite = new Date();
        data_limite.setDate(data_1.getDate() + 10);
    
        let fretes_banco = await frete_maritimo_service_1.default.getOne({ porto_embarque: porto_embarque_1.trim(), porto_descarga: porto_descarga_1.trim(),tipo_container: containers_str, 
        
            $expr: {
                $and: [
                  { $gte: [{ $dateFromString: { dateString: "$data_embarque", format: "%d/%m/%Y" } }, new Date(data_saida)] },
                  { $lte: [{ $dateFromString: { dateString: "$data_embarque", format: "%d/%m/%Y" } }, new Date(data_limite)] }
                ]
              }
        });


        let response_freight = [];
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
                    navio: linha.navio,
                    data_embarque: linha.data_embarque,
                    tempo_de_transito: linha.tempo_de_transito,
                    data_chegada: linha.data_chegada,
                    base_freight: parseFloat(linha.base_freight),
                    bunker: parseFloat(linha.bunker),
                    isps: parseFloat(linha.isps),
                    imagem_link: ` - `,
                });
            });
        }

        return response_freight;
    }
    catch (e) {
        console.error('Erro:', e);
        return [];
    }
};
exports.local = local;
