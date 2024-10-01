import TipoContainer, { ITipoContainer } from '../models/TipoContainer';
import TipoContainerDepara, { ITipoContainerDepara } from '../models/TipoContainerDepara';

const create = (body: ITipoContainer) => TipoContainer.create(body);
const createDepara = (body: ITipoContainerDepara) => TipoContainerDepara.create(body);
const getOne = (typeContainer: string) => TipoContainer.findOne({idItem: typeContainer})
const getAll = () => TipoContainer.find();

export default {
    create,
    createDepara,
    getAll,
    getOne
}