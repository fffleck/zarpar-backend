import {Request, Response} from "express";


export const files = async (req: Request, res: Response)=>{
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', '*');
    res.setHeader('Access-Control-Allow-Headers', '*');

    

    const file = req.body.data;
    

    console.log('ARQUIVO ', file);
};