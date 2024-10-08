import { Request, Response } from "express";
import userService from "../../services/user.service";
import { IUser } from "../../models/User";

export const analitcs_user = async (req: Request, res: Response) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,POST');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

    try {
        const users: IUser[] = await userService.getAll();

        if (users.length === 0) {
            return res.status(401).json({
                success: false,
                message: "Usuários não encontrados."
            });
        }

        const sanitizedUsers = users.map(user => {
          const { password, ...rest } = user.toObject(); 
          return rest; 
      });

        return res.json({
            success: true,
            message: "Usuários localizados",
            list: sanitizedUsers
        });
    } catch (error) {
        console.error("Erro ao localizar usuário:", error);
        return res.status(500).json({
            success: false,
            message: "Erro interno do servidor."
        });
    }
};
