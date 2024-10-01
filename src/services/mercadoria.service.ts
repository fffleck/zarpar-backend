import Mercadoria, { IMercadoria } from '../models/Mercadoria';
import MercadoriaDepara, { IMercadoriaDepara } from '../models/MarcadoriaDepara';

const create = (body: IMercadoria) => Mercadoria.create(body);
const createDepara = (body: IMercadoriaDepara) => MercadoriaDepara.create(body);
const getOne = (mercadoria: string) => Mercadoria.findOne({idItem: mercadoria})
const getAll = () => Mercadoria.find();

export default {
    create,
    createDepara,
    getAll,
    getOne,
}