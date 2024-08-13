import {Request, Response} from "express";
import fornecedorService from "../../services/fornecedor.service";

export const del_fornecedor = async (req: Request, res: Response)=>{
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', '*');
  res.setHeader('Access-Control-Allow-Headers', '*');

  const objFornecedor = req.body
  
  objFornecedor.tradelane = objFornecedor.tradelane.toString()

  const delete_fornecedor = await fornecedorService.deleteOne(objFornecedor.id).then((id) => {
    return res.status(200).json({
        success: true,
        message: "Fornecedor removido com sucesso."
    });
  }).catch(err => {
    return res.status(500).json({ success: false, errorCode: err.code, message: "Problema ao remover Fornecedor" });
  });
  
  
  if(delete_fornecedor){
    
  } else{
    res.status(403).json({
      success: false,
      message: "Problema ao gravar fornecedor."
    })
  }
};