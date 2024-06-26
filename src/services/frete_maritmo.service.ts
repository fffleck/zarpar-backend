import { FilterQuery } from 'mongoose';
import FreteMaritmo, { IFreteMaritmo } from '../models/FreteMaritmo';

const create = (body: any) => FreteMaritmo.create(body);
const getAll = () => FreteMaritmo.find();
const getOne = (params: FilterQuery<IFreteMaritmo>) => FreteMaritmo.find(params);

export default {
    create,
    getAll,
    getOne
}