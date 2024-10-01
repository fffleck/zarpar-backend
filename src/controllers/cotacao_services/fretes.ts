import { Request, Response } from "express";
import { zim } from "./zimController";
import { searates } from "./searatesController";
import { evergreen } from "./evergreenController";
import { cma } from "./cmaController";
import { local } from "./localController";
import cachedService from "../../services/cached.service"
import { getCached } from "./cachedController";
import moment from "moment";
import armador_loginService from "../../services/armador_login.service";
import Robot from "../../models/Robot";
import mercadoriaService from "../../services/mercadoria.service";
import portoService from "../../services/porto.service";
import tipo_containerService from "../../services/tipo_container.service";

export const fretes = async (req: Request, res: Response) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "*");
  res.setHeader("Access-Control-Allow-Headers", "*");

  const email: string = typeof req.query.email === 'string' ? req.query.email : '';
  const tipo_mercadoria = typeof req.query.mercadoria === 'string' ? req.query.mercadoria : '1'
  let response_freight: any[];
  let response_filter: any[];
  let response_cached = false;
  response_freight = [];
  response_filter = [];
  let data_saida_formatada: Date

  
  const credencialsRobotMaersk = await armador_loginService.getCredencialsArmadorEmail('Maersk', email);
  const objMercadoria = await mercadoriaService.getAll() // Quando mudar para o plano enterprise tem que revisar isso 
  const objPortoOrigem = await portoService.getOne(typeof req.query.porto_embarque === 'string' ? req.query.porto_embarque : 'ND')
  const objPortoDestino = await portoService.getOne(typeof req.query.porto_descarga === 'string' ? req.query.porto_descarga: 'ND')
  const objContainer = await tipo_containerService.getOne(typeof req.query.tipo_container === 'string' ? req.query.tipo_container : 'ND')

  




  if (credencialsRobotMaersk && objMercadoria && objPortoOrigem && objPortoDestino && objContainer) {
    const dadosRobot = new Robot();
    dadosRobot.porto_origem = objPortoOrigem.port_name
    dadosRobot.porto_origem_country = objPortoOrigem.country
    dadosRobot.porto_destino = objPortoDestino.port_name
    dadosRobot.porto_destino_country = objPortoDestino.country
    dadosRobot.mercadoria = objMercadoria[0].name
    dadosRobot.qtd_container = 1
    dadosRobot.type_container = objContainer.name
    dadosRobot.peso_container = objContainer.weight
    dadosRobot.data_embarque = typeof req.query.data_saida === 'string' ? req.query.data_saida : moment(moment.now()).format('YYYY-MM-DD');
    dadosRobot.user = credencialsRobotMaersk?.user ?? 'ND'
    dadosRobot.password = credencialsRobotMaersk?.password ?? 'ND'

    await dadosRobot.save()
  }
  
  // response_freight = await adicionar_servico(response_freight, req, res, getCached)
  
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

    res.status(200).json(response_freight)
    
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
