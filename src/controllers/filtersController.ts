import armadorService from "../services/armador.service";
import mercadoriaService from "../services/mercadoria.service";
import ncmsService from "../services/ncms.service";
import portoService from "../services/porto.service";
import tipoContainerService from "../services/tipo_container.service";
import tipoMercadoriaService from "../services/tipo_mercadoria.service";
import {Request, Response} from "express";

export const mercadorias = async (req: Request, res: Response) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "*");
  res.setHeader("Access-Control-Allow-Headers", "*");

  let response = await mercadoriaService.getAll();
  res.status(200).json(response);
};

export const portos_embarque = async (req: Request, res: Response) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "*");
  res.setHeader("Access-Control-Allow-Headers", "*");

  let response = await portoService.getAll();
  // res.status(200).json(response.filter((porto)=> porto.incluiEmbarque));
  res.status(200).json(response);
};

export const portos_descarga = async (req: Request, res: Response) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "*");
  res.setHeader("Access-Control-Allow-Headers", "*");

  let response = await portoService.getAll();
  res.status(200).json(response);
  // res.status(200).json(response.filter((porto)=> porto.incluiChegada));
};

export const tipos_container = async (req: Request, res: Response) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "*");
  res.setHeader("Access-Control-Allow-Headers", "*");

  let response = await tipoContainerService.getAll();
  res.status(200).json(response);
};

export const tipos_mercadoria = async (req: Request, res: Response) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "*");
  res.setHeader("Access-Control-Allow-Headers", "*");

  let response = await tipoMercadoriaService.getAll();
  res.status(200).json(response);
};

export const armadores = async (req: Request, res: Response) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "*");
  res.setHeader("Access-Control-Allow-Headers", "*");

  let response = await armadorService.getAll();
  res.status(200).json(response);
}

export const ncms = async (req: Request, res: Response) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "*");
  res.setHeader("Access-Control-Allow-Headers", "*");

  const informacoesNcm = req.body;
  const codigoNcm = informacoesNcm.code;

  let response = await ncmsService.getByName(codigoNcm);
  res.status(200).json(response);
}
