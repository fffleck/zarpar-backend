import Ncm, { INcm } from "../models/Ncm";

const create = (body: INcm) => Ncm.create(body);
const getAll = () => Ncm.find();
const getByName = (codigo: any) => Ncm.find({ $or: [{name: new RegExp('.*' + codigo + '.*')},{codigo: new RegExp(codigo + '.*')}] },{_id: 0, code: 1, name: 1})

export default {
    create,
    getAll,
    getByName
  }