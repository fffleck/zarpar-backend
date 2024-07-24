import { Request, Response } from "express";
import portoService from "../../services/porto.service";
import cachedService from "../../services/cached.service";
export const cachedController = async (req: Request, res: Response) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "*");
  res.setHeader("Access-Control-Allow-Headers", "*");

  let response_freight: any[];
  
  response_freight = await getCached(req, res);

  if (response_freight.length === 0) {
    res.status(200).json({
      message: "Frete nao encontrado.",
    });
  } else {
    res.status(200).json(response_freight);
  }
};

export const getCached = async (req: Request, res: Response) => {
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
    
    let data_1 = new Date(data_saida)
    let data_limite = new Date()

    data_limite.setDate(data_1.getDate() + 10)

    let frete_cached = await cachedService.getFreigth({porto_embarque: pe_obj?.port_name, porto_descarga: pd_obj?.port_name,tipo_container: tipo_container,
      $expr: {
        $and: [
          { $gte: [{ $dateFromString: { dateString: "$data_embarque", format: "%d/%m/%Y" } }, new Date(data_saida)] },
          { $lte: [{ $dateFromString: { dateString: "$data_embarque", format: "%d/%m/%Y" } }, new Date(data_limite)] }
        ]
      }
    })
    
    if (frete_cached.length >= 1) {
      frete_cached.forEach((linha: any) => {
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
      console.log("Não existe frete local para esta pesquisa.");
      return [];
  } 
};
