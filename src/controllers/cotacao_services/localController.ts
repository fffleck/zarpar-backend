import { Request, Response } from "express";
import portoService from "../../services/porto.service";
import frete_maritmoService from "../../services/frete_maritmo.service";
import { formataData, formataData2 } from "../../utils";
import { isDate } from "util/types";
import moment from "moment";

export const localController = async (req: Request, res: Response) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "*");
  res.setHeader("Access-Control-Allow-Headers", "*");

  let response_freight: any[];
  
  response_freight = await local(req, res);

  if (response_freight.length === 0) {
    res.status(200).json({
      message: "Frete nao encontrado.",
    });
  } else {
    res.status(200).json(response_freight);
  }
};

export const local = async (req: Request, res: Response) => {
  const {
    data_saida,
    porto_embarque,
    porto_descarga,
    tipo_container,
  }: any = req.query;
  if (!data_saida || !porto_embarque || !porto_descarga || !tipo_container) {
    return [];
  }

  let response_freight: any[];
  response_freight = [];

  
  try {
    let portos = await portoService.getAll()
    let pe_obj = portos.find((porto) => porto.port_id.trim() === porto_embarque.trim())
    let pd_obj = portos.find((porto) => porto.port_id.trim() === porto_descarga.trim())
    let containers_str = ""
    if (tipo_container == "ST20") { containers_str = "20'DV"}
    if (tipo_container == "ST40") { containers_str = "40'DV"}
    if (tipo_container == "HQ40") { containers_str = "40'HQ"}

    let porto_embarque_1 = pe_obj?.port_id.split("/")[1]
    let porto_descarga_1 = pd_obj?.port_id.split("/")[1]

    let data_limite = moment(data_saida).add(10,'days').format('DD/MM/YYYY')
    let data_inicial =  moment(data_saida).format('DD/MM/YYYY')


    console.log("PORTO ORIGEM ", porto_embarque)
    console.log("PORTO DETINO", porto_descarga)
    console.log("DATA INICIAL", moment(data_inicial, "DD/MM/YYYY").toDate())
    console.log("DATA FINAL", moment(data_limite, "DD/MM/YYYY").toDate())
  
    let fretes_banco = await frete_maritmoService.getOne({
      porto_embarque: porto_embarque_1?.trim(),
      porto_descarga: porto_descarga_1?.trim(),
      tipo_container: containers_str,
      data_embarque: {
        $gte: moment(data_inicial, "DD/MM/YYYY").toDate(),
        $lte: moment(data_limite, "DD/MM/YYYY").toDate()
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
            data_embarque: moment(linha.data_embarque).format('DD/MM/YYYY'),
            tempo_de_transito: linha.tempo_de_transito,
            data_chegada: moment(linha.data_chegada).format('DD/MM/YYYY'),
            base_freight: parseFloat(linha.base_freight),
            bunker: parseFloat(linha.bunker),
            isps: parseFloat(linha.isps),
            imagem_link: ` - `,
        });
      });
    }

    if (response_freight.length === 0) {
      return [];
    } else {
      return response_freight;
    }
  } catch (error) {
      console.log("ERRO", error)
      console.log("Não existe frete local para esta pesquisa.");
      return [];
  } 
};
