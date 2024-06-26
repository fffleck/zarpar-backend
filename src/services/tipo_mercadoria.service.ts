import TipoMercadoria, { ITipoMercadoria } from '../models/TipoMercadoria';
import TipoMercadoriaDepara, { ITipoMercadoriaDepara } from '../models/TipoMercadoriaDepara';

const create = (body: ITipoMercadoria) => TipoMercadoria.create(body);
const createDepara = (body: ITipoMercadoriaDepara) => TipoMercadoriaDepara.create(body);
const getAll = () => TipoMercadoria.find();

export default {
    create,
    createDepara,
    getAll
}