import express from 'express';
import app from './app'; // Configuração do servidor Express
import swaggerApp from './swagger'; // Configuração do Swagger

const PORT = process.env.PORT || 3334;

app.use('/api', swaggerApp); // Adiciona a rota para a documentação

app.listen(PORT, () => {
  console.log(`Server is running up port ${PORT}`);
});
