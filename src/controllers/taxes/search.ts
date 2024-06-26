import {Request, Response} from "express";
import taxesService from "../../services/taxes.service";

export const search_taxes = async (req: Request, res: Response)=>{
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', '*');
  res.setHeader('Access-Control-Allow-Headers', '*');

  const infoBooking = req.body

  const porto = infoBooking.props.porto_embarque.split("-")[0];
  const armador = infoBooking.props.armador.replace(" ","-").toUpperCase();
  const typeContainer = infoBooking.props.tipo_container.replace(/[^0-9]/g,'')

  const listTaxes = await taxesService.getByPort({ porto: porto, armador: armador, container: parseFloat(typeContainer)})

  if(listTaxes){
      res.json({
          success: true,
          message: "Quotations Encontrado",
          list: listTaxes
      })
  } else{
    res.status(404).json({
      success: false,
      message: "Problema ao localizar taxas."
    })
  }
};