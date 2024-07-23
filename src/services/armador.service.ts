import { FilterQuery } from 'mongoose';
import Armador, { IArmador } from '../models/Armador';

const create = (body: IArmador) => Armador.create(body);
const getAll = () => Armador.find();
const getOne = (params: FilterQuery<IArmador>) => Armador.find(params);
const getByIdArmador = (id: string) => Armador.findOne({ idArmador: id});

export default {
    create,
    getAll,
    getOne,
    getByIdArmador
}