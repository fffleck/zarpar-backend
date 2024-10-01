import Porto, { IPorto } from '../models/Porto';
import PortoDepara, { IPortoDepara } from '../models/PortoDepara';

const create = (body: IPorto) => Porto.create(body);
const createDepara = (body: IPortoDepara) => PortoDepara.create(body);
const getOne = (porto: string) => Porto.findOne({port_id: porto})
const getAll = () => Porto.find();

export default {
    create,
    createDepara,
    getAll,
    getOne
}