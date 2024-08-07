import {Request, Response} from "express";
import fornecedorService from "../../services/fornecedor.service";

export const add_fornecedor = async (req: Request, res: Response)=>{
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', '*');
  res.setHeader('Access-Control-Allow-Headers', '*');

  const objFornecedor = req.body


  objFornecedor.idArmador = objFornecedor.armador
  objFornecedor.name = objFornecedor.nome
  objFornecedor.tradelane = objFornecedor.tradelane.toString()

  const save_fornecedor = await fornecedorService.create(objFornecedor).then((id) => {
    return res.status(200).json({
        success: true,
        message: "Fornecedor salvo com sucesso."
    });
  }).catch(err => {
    if (err.name === 'MongoServerError' && err.code === 11000) {
        return res.status(200).send({ succes: false, errorCode: err.code, message: 'Fornecedor já cadastrado!' });
    } else {
        return res.status(500).json({ success: false, errorCode: err.code, message: "Problema ao cadastrar Fornecedor" });
    }
  });
  
  
  if(save_fornecedor){
    
} else{
  res.status(403).json({
    success: false,
    message: "Problema ao gravar fornecedor."
  })
}
};