import {Request, Response} from "express";
import fornecedorService from "../../services/fornecedor.service";

export const list_fornecedor = async (req: Request, res: Response)=>{
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', '*');
  res.setHeader('Access-Control-Allow-Headers', '*');

  const search = req.body.email

  let listFornecedor = [];

  if (search=="ffleck@gmail.com" || search==="alvaro@karavel.com.br") {
    listFornecedor = await fornecedorService.getAll()
  } else {
    listFornecedor = await fornecedorService.getOne({ email: search })
  }


  if(listFornecedor.length > 0){
      res.json({
          success: true,
          message: "Quotations Encontrado",
          list: listFornecedor
      })
  } else{
    res.status(404).json({
      success: false,
      message: "Problema ao localizar fornecedores."
    })
  }
};