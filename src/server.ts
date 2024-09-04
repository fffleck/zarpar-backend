import express from 'express';
import app from './app'; // Configuração do servidor Express
import swaggerApp from './swagger'; // Configuração do Swagger
import cors from 'cors';
import { find_user } from './controllers/user/find_user';
import path from 'path';

const PORT = process.env.PORT || 3334;

app.use(cors());
app.use(express.json());

app.post('/find_user', find_user);

app.use('/files', express.static(path.resolve('files')));


app.use('/api', swaggerApp); // Adiciona a rota para a documentação

app.listen(PORT, () => {
  console.log(`Server is running up port ${PORT}`);
});
