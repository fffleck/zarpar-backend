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
exports.upload_taxes = void 0;
const user_service_1 = __importDefault(require("../../services/user.service"));
const taxes_1 = __importDefault(require("../../services/taxes.service"));
const xlsx = require('xlsx');

const upload_taxes = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', '*');
    res.setHeader('Access-Control-Allow-Headers', '*');
    const { data } = req.body;

    const base64Buffer = Buffer.from(data.split(',')[1], 'base64');
    const workbook = xlsx.read(base64Buffer, { type: 'buffer' });
    const sheet = workbook.Sheets[workbook.SheetNames[0]];
    const dataFromExcel = xlsx.utils.sheet_to_json(sheet, {raw:false});
    let total_registros = 0;
    let total_importados = [];
    let name_arquivo = null;


    for (const row of dataFromExcel) {
        const {direcao: direcao, 
                armador: armador,
                porto: porto,
                container: container, 
                taxname: taxname, 
                currency: currency,
                taxValue: taxValue } = row;

        const newTaxes = {
            direcao: direcao,
            armador: armador,
            porto: porto,
            container: container,
            taxname: taxname,
            currency: currency,
            taxValue: taxValue
        }

        total_registros++;
        name_arquivo = armador
    
        taxes_1.default.create(newTaxes)
        .then((id) => {
            total_importados.push(id);
        })
        .catch(err => {
            console.log('ERROR => ', err.message);
        });   
    }

    return res.status(200).json({
            success: true,
            arquivo: name_arquivo,
            total_registros: total_registros,
            total_importados: total_registros,
    });
});

exports.upload_taxes = upload_taxes;
