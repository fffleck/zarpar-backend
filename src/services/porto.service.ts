import Porto, { IPorto } from '../models/Porto';
import PortoDepara, { IPortoDepara } from '../models/PortoDepara';

const create = (body: IPorto) => Porto.create(body);
const createDepara = (body: IPortoDepara) => PortoDepara.create(body);
const getAll = () => Porto.find();

export default {
    create,
    createDepara,
    getAll
}