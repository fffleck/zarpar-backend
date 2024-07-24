import { FilterQuery } from 'mongoose';
import Cached, { ICached } from '../models/Cached';

const create = (body: ICached) => Cached.create(body);
const insert = (body: ICached) => Cached.findOneAndUpdate(
  { porto_embarque: body.porto_embarque, 
    porto_descarga: body.porto_descarga, 
    data_embarque: body.data_embarque, 
    tipo_container: body.tipo_container, 
    data_chegada: body.data_chegada,
    armador: body.armador,
    shipment_id: body.shipment_id, 
    id_tipo_container: body.id_tipo_container,
    navio: body.navio,
    tempo_de_transito: body.tempo_de_transito
  }, body, {new: true, upsert: true, setDefaultsOnInsert: true});
const getAll = () => Cached.find();
const getFreigth = (params: FilterQuery<ICached>) => Cached.find(params);

export default {
    create,
    insert,
    getAll,
    getFreigth
}