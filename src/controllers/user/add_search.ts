import {Request, Response} from "express";
import userService from "../../services/user.service";
import { IUser } from "../../models/User";

export const add_search = async (req: Request, res: Response)=>{
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', '*');
    res.setHeader('Access-Control-Allow-Headers', '*');

    

    const email = req.body.email;
    const useraddSearch = await userService.updateSearch(email);

    if(email){
        res.json({
            success: true,
            message: "Atualizado"
        })
    } else{
      res.status(401).json({
        success: false,
        message: "Problema ao localizar usuário."
      })
    }
};