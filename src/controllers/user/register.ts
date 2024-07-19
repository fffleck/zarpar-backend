import {Request, Response} from "express";
import userService from "../../services/user.service";
import User, { IUser } from "../../models/User";
var CryptoJS = require("crypto-js");

export const register = async (req: Request, res: Response)=>{
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', '*');
    res.setHeader('Access-Control-Allow-Headers', '*');
 
    const userData = req.body.userData;

   const newUser = new User;
    
    newUser.name = userData.nomeCompleto
    newUser.enterpriseName = userData.nomeEmpresa
    newUser.address = userData.endereco
    newUser.city = userData.cidade
    newUser.state = userData.estado
    newUser.zipCode = userData.cep
    newUser.email = userData.email
    newUser.search = 0
    newUser.password = CryptoJS.MD5(userData.senha).toString(CryptoJS.enc.Hex); //Converte a senha para MD5
    newUser.telefone = userData.telefone.replace("(","").replace(")","").replaceAll(" ", "")
    
    userService.create(newUser)
       .then((id) =>{
          return res.status(200).json({
             success: true,
             errorCode: 0,
             message: "Usuário cadastrado com sucesso."})
       })
       .catch(err => {
          if (err.name === 'MongoServerError' && err.code === 11000) {
             // Duplicate e-mail
             return res.status(422).send(
                { succes: false, errorCode: err.code, message: 'E-mail já cadastrado!'}
             );
          }else{
            console.log('ERRO ', err.message)
             return res.status(500).json(
                { success: false, errorCode: err.code, message: "Problema ao cadastrar usuário"}
             );
          }
          
       })
 
 };