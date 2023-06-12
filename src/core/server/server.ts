import express, { Application, Router } from "express";
import bodyParser from "body-parser";

import RestRouters from "../../rest/routes";
import initializeInjection from "../injection";

const PORT = 3000;

class ExpressServer {
  server: Application;
  container: any;

  constructor() {
    this.server = express();
  }

  getRouter() {
    return Router();
  }

  initializeMiddlewares() {
    this.server.use(bodyParser.json());
    this.server.use(bodyParser.urlencoded({ extended: true }));
  }

  initializeRestRouters() {
    const restRouters = new RestRouters(this.server, this.container);
    restRouters.initialize();
  }

  initializeInjection() {
    const container = initializeInjection();
    this.container = container;
  }

  initialize() {
    this.initializeInjection();
    this.initializeMiddlewares();
    this.initializeRestRouters();

    try {
      this.server.listen(PORT, (): void => {
        console.log(`Connected successfully on port ${PORT}`);
      });
    } catch (error: any) {
      console.error(`Error occurred: ${error.message}`);
    }
  }
}

export default ExpressServer;
