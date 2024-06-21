import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import express from 'express';
import path from 'path';

const app = express();

const swaggerOptions = {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: 'Zarpar Shipping Backend API',
      version: '1.0.0',
      description: 'API documentation for the Zarpar Shipping Backend',
    },
    servers: [
      {
        url: 'http://localhost:3334', // Altere para a URL onde o servidor está rodando
        description: 'Development server',
      },
    ],
  },
  apis: [path.join(__dirname, 'routes', '*.{ts,js}')], // Caminho absoluto
};

const swaggerDocs = swaggerJsdoc(swaggerOptions);
app.use('/', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

export default app;
