import { FilterQuery } from 'mongoose';
import ArmadorLogin, { IArmadorLogin } from '../models/ArmadorLogin';


const create = (body: IArmadorLogin) => ArmadorLogin.create(body);
const getAll = () => ArmadorLogin.find();
const getOne = (params: FilterQuery<IArmadorLogin>) => ArmadorLogin.find(params);
const getByArmador = (armador: string) => ArmadorLogin.findOne({ armador: armador});
const getByEmail = (email: string) => ArmadorLogin.find({ email: email});
const getExistArmador = (armador: string, email: string) => ArmadorLogin.count({armador: armador, email: email})
const getCredencialsArmadorEmail = (armador: string, email: string) => ArmadorLogin.findOne({armador: armador, email: email})
const update = async (body: IArmadorLogin) => {
    try {
      const bodyObject = body.toObject ? body.toObject() : { ...body };
  
      delete bodyObject._id;
  
      const updateArmador = await ArmadorLogin.findOneAndUpdate(
        { armador: body.armador, email: body.email }, 
        bodyObject, 
        { new: true } 
      );
  
      if (!updateArmador) {
        throw new Error('Armador não encontrado ou não pode ser atualizado.');
      }
  
      return updateArmador;
    } catch (error) {
      console.error('Erro ao atualizar Armador: ', error);
      throw error;
    }
  };
  

export default {
    create,
    getAll,
    getOne,
    getByArmador,
    getByEmail,
    getExistArmador, 
    getCredencialsArmadorEmail,
    update
}