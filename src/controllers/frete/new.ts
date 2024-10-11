import {Request, Response} from "express";
import frete_maritmoService from "../../services/frete_maritmo.service";
import moment from "moment";


export const new_frete = async (req: Request, res: Response)=>{
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', '*');
  res.setHeader('Access-Control-Allow-Headers', '*');

  const infsFreight = req.body;  

  console.log("DADOS RECEBIDOS", infsFreight)

  let containers_str = ""
  if (infsFreight.container == "20' Standard") { containers_str = "20'DV"}
  if (infsFreight.container == "40' Standard") { containers_str = "40'DV"}
  if (infsFreight.container == "40' High Cube") { containers_str = "40'HQ"}


  const newFrete = {
    mercadoria: infsFreight.mercadoria,
    id_mercadoria: "1",
    tipo_mercadoria: infsFreight.mercadoria,
    id_tipo_mercadoria: "1",
    tipo_container: containers_str,
    id_tipo_container: containers_str=="40'DV"? "2" : "1",
    porto_embarque: infsFreight.porto_embarque.split("-")[0].trim(),
    id_porto_embarque: "1",
    porto_descarga: infsFreight.porto_descarga.split("-")[0].trim(),
    id_porto_descarga: "2",
    armador: infsFreight.armador,
    id_armador: 
        infsFreight.armador.toUpperCase()=="MAERSK" ? "1" : 
        infsFreight.armador.toUpperCase()=="CMA-CGM" ? "2": 
        infsFreight.armador.toUpperCase()=="MSC" ? "3" : 
        infsFreight.armador.toUpperCase()=="EXALOG" ? "4": 
        infsFreight.armador.toUpperCase()=="COSCO" ? "5" : 
        infsFreight.armador.toUpperCase()=="HAPAG" ? "6" : 
        infsFreight.armador.toUpperCase()=="ONE" ? "7" : 
        infsFreight.armador.toUpperCase()=="HMM" ? "8" :  "0",
    nome_navio: infsFreight.navio,
    data_embarque: moment(infsFreight.data_embarque,'MM/DD/YYYY').toDate(),
    tempo_de_transito: infsFreight.tempo_de_transito,
    data_chegada: moment(infsFreight.data_chegada, 'MM/DD/YYYY').toDate(),
    base_freight: infsFreight.base_freight,
    bunker: infsFreight.bunker,
    isps: infsFreight.isps,
    transbordo: infsFreight.transbordo ?? "Algiers"
}
  
  const save_freight = await frete_maritmoService.create(newFrete)

  if(save_freight){
      res.json({
          success: true,
          message: "Freight Cadastrado com sucesso"
      })
  } else{
    res.status(401).json({
      success: false,
      message: "Problema ao cadastrar novo Freight."
    })
  }
};