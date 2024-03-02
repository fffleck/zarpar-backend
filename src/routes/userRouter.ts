import { register } from '../controllers/user/register';
import { find_user } from '../controllers/user/find_user';
import { add_search } from '../controllers/user/add_search';

import express, { Router } from "express";
const routes:Router = express.Router();

// Filtros
routes.post('/register', register)
routes.post('/find_user', find_user)
routes.post('/add_search', add_search)

export default routes;