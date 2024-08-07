import express, { Application } from "express";
import connectDatabase from "./database/db";
import cors from 'cors';
import authRouter from "./routes/authRouter";
import cotacaoRouter from "./routes/cotacaoRouter";
import filtersRouter from "./routes/filtersRouter";
import userRouter from "./routes/userRouter";
import emailRouter from "./routes/emailRouter";
import uploadRouter from "./routes/uploadRouter";
import bookingRouter from "./routes/bookingRouter";
import quotationsNACRouter from "./routes/cotacoesNacRouter";
import fornecedorRouter from "./routes/fornecedorRoute"

// Importando Swagger
import swaggerApp from "./swagger";

class App {
  server: Application;

  constructor() {
    this.server = express();

    connectDatabase();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(express.json());
    this.server.use(cors());
  }

  routes() {
    this.server.use("/auth", authRouter);
    this.server.use("/cotacao", cotacaoRouter);
    this.server.use("/filters", filtersRouter);
    this.server.use("/user", userRouter);
    this.server.use("/email", emailRouter);
    this.server.use("/upload", uploadRouter);
    this.server.use("/fornecedor", fornecedorRouter);
    this.server.use("/booking", bookingRouter);
    this.server.use("/quotations", quotationsNACRouter);
    this.server.use("/swagger", swaggerApp); // Rota para a documentação do Swagger
  }
}

export default new App().server;
