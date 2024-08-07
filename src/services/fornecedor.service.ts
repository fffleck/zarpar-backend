import { FilterQuery } from 'mongoose';
import Fornecedor, { IFornecedor } from '../models/Fornecedores';


const create = (body: IFornecedor) => Fornecedor.create(body);
const getAll = () => Fornecedor.find();
const getOne = (params: FilterQuery<IFornecedor>) => Fornecedor.find(params);
const getByIdFornecedor = (id: string) => Fornecedor.findOne({ id: id});
const deleteOne = (body: IFornecedor) => Fornecedor.deleteOne({idArmador: body.idArmador, email: body.email, tradelane: body.tradelane})

export default {
    create,
    getAll,
    getOne,
    getByIdFornecedor,
    deleteOne
}