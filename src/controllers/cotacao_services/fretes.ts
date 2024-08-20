import { Request, Response } from "express";
import { zim } from "./zimController";
import { searates } from "./searatesController";
import { evergreen } from "./evergreenController";
import { cma } from "./cmaController";
import { local } from "./localController";
import cachedService from "../../services/cached.service"
import { getCached } from "./cachedController";

export const fretes = async (req: Request, res: Response) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "*");
  res.setHeader("Access-Control-Allow-Headers", "*");

  let email = req.query.email
  let response_freight: any[];
  let response_filter: any[];
  let response_cached = false;
  response_freight = [];
  response_filter = [];

  // response_freight = await adicionar_servico(response_freight, req, res, getCached)
  
  console.log("Email recebido", email)
  
  // if (response_freight.length === 0 ) {
  //   response_cached = false;
    
    response_freight = await adicionar_servico(response_freight, req, res, searates);
    response_freight = await adicionar_servico(response_freight, req, res, zim);
    response_freight = await adicionar_servico(response_freight, req, res, cma);
    response_freight = await adicionar_servico(response_freight, req, res, evergreen);
    response_freight = await adicionar_servico(response_freight, req, res, local);
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
  } else {
    if (!response_cached) {
      response_freight.forEach(async (result) => {
        result.email = email
        await cachedService.insert(result);
      })
    }

    response_freight.forEach((linha)=> {
      const data_cotacao = linha.data_embarque.split("/")[2]+"-"+linha.data_embarque.split("/")[1]+"-"+linha.data_embarque.split("/")[0];

      if ((req.query.data_saida) && (req.query.data_saida <= data_cotacao)) {
        response_filter.push(linha)
      }
    })

    if (response_filter.length === 0) {
      res.status(200).json([]);
    } else {
      response_freight = response_filter
      res.status(200).json(response_freight);
    }
  }
};

const adicionar_servico = async (
  arr: any[],
  req: Request,
  res: Response,
  service: (req: Request, res: Response) => Promise<any[]>
) => {
  try {
    let res_service: any[];
    res_service = await service(req, res);
    res_service = res_service.concat(arr);
    return res_service;
  } catch (e) {
    return arr;
  }
};
