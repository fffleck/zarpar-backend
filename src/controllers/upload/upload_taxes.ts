import {Request, Response} from "express";
import xlsx from 'xlsx'
import taxesService from "../../services/taxes.service";


export const upload_taxes = async (req: Request, res: Response)=>{
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', '*');
    res.setHeader('Access-Control-Allow-Headers', '*');

    const { data } = req.body;
    const base64Buffer = Buffer.from(data.split(',')[1], 'base64')
    const workbook = xlsx.read(base64Buffer, { type: 'buffer' })
    const sheet = workbook.Sheets[workbook.SheetNames[0]]
    const dataFromExcel: any = xlsx.utils.sheet_to_json(sheet, {raw:false})

    let total_registros = 0;
    let total_importados = 0;
    let name_arquivo = null;
    let save_taxes = null;


    for (const row of dataFromExcel) {
        const {
          direcao, 
          armador,
          porto,
          container, 
          taxname, 
          taxValue,
          currency,
          applicability
        } = row;

        const newTaxes = {
          direcao: direcao,
          armador: armador,
          porto: porto,
          container: container,
          taxname: taxname,
          taxValue: taxValue,
          currency: currency,
          applicability: applicability
      }

        total_registros++;
        name_arquivo = armador

        save_taxes = await taxesService.create(newTaxes)

        if (save_taxes) {
            total_importados++;
        }   
    }

    if(save_taxes){
        res.json({
            success: true,
            arquivo: name_arquivo,
            total_registros: total_registros,
            total_importados: total_importados,
        })
    } else{
      res.status(403).json({
        success: false,
        message: "Problema ao gravar taxas."
      })
    }
};