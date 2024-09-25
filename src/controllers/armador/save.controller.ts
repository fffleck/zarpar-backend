import {Request, Response} from "express";
import armador_loginService from "../../services/armador_login.service";
import ArmadorLogin, { IArmadorLogin } from "../../models/ArmadorLogin";

export const save_armadores = async (req: Request, res: Response)=>{
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', '*');
  res.setHeader('Access-Control-Allow-Headers', '*');

  const infsArmadorLogin = req.body;  

  const dataArmador: IArmadorLogin = new ArmadorLogin();
  let salvou = false;
  
  
    dataArmador.armador = infsArmadorLogin.nome_armador
    dataArmador.user =  infsArmadorLogin.login
    dataArmador.password =  infsArmadorLogin.password
    dataArmador.email = infsArmadorLogin.email
    dataArmador.status =  infsArmadorLogin.status
    

  const existArmador = await armador_loginService.getExistArmador(infsArmadorLogin.nome_armador, infsArmadorLogin.email)

  if (existArmador > 0) {
    await armador_loginService.update(dataArmador)
    salvou = true;
  } else {
    await armador_loginService.create(dataArmador)
    salvou = true;
  }
  
  if(salvou){
      res.json({
          success: true,
          message: "Dados cadastrados com sucesso"
      })
  } else{
    res.status(401).json({
      success: false,
      message: "Problema ao cadastrar dados do armador."
    })
  }
};