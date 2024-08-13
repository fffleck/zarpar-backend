import { FilterQuery } from 'mongoose';
import Fornecedor, { IFornecedor } from '../models/Fornecedores';


const create = (body: IFornecedor) => Fornecedor.create(body);
const getAll = () => Fornecedor.find();
const getOne = (params: FilterQuery<IFornecedor>) => Fornecedor.find(params);
const getByIdFornecedor = (id: string) => Fornecedor.findOne({ id: id});
const deleteOne = (id: string) => Fornecedor.deleteOne({_id: id})

export default {
    create,
    getAll,
    getOne,
    getByIdFornecedor,
    deleteOne
}