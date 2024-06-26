import Taxes from "../models/Taxes";

const create = (body: any) => Taxes.create(body);
const getAll = () => Taxes.find();
const getByPort = (body: any) => Taxes.find({ direcao: 'EXPORTAÇÃO', porto: body.porto.trim(), armador: body.armador.trim(), container: body.container });

export default {
    create,
    getAll,
    getByPort
}