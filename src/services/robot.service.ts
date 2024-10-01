import { FilterQuery } from 'mongoose';
import Robot, { IRobot } from '../models/Robot';

const create = (body: IRobot) => Robot.create(body);
const getAll = () => Robot.find();
const getOne = (params: FilterQuery<IRobot>) => Robot.find(params);

export default {
    create,
    getAll,
    getOne
}