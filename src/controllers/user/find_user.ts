import { Request, Response } from "express";
import userService from "../../services/user.service";
import { IUser } from "../../models/User";

export const find_user = async (req: Request, res: Response) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', '*');
    res.setHeader('Access-Control-Allow-Headers', '*');

    const email = req.body.email;

    try {
        const users: IUser[] = await userService.getByEmail(email);

        if (users.length === 0) {
            return res.status(401).json({
                success: false,
                message: "Usuário não encontrado."
            });
        }

        const user = users[0];

        return res.json({
            success: true,
            message: "Usuário localizado",
            user: user
        });
    } catch (error) {
        console.error("Erro ao localizar usuário:", error);
        return res.status(500).json({
            success: false,
            message: "Erro interno do servidor."
        });
    }
};
