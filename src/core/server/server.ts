import express, { Application } from "express";
import bodyParser from "body-parser";
import { AwilixContainer } from "awilix";

import RestRouters from "../../rest/routes";
import initializeInjection from "../injection";

const PORT = 3000;

class ExpressServer {
  server: Application;
  container: AwilixContainer;

  constructor() {
    const container = initializeInjection();

    this.server = express();
    this.container = container;
  }

  initializeMiddlewares() {
    this.server.use(bodyParser.json());
    this.server.use(bodyParser.urlencoded({ extended: true }));
  }

  initializeRestRouters() {
    const restRouters = new RestRouters(this.server, this.container);
    restRouters.initialize();
  }

  initialize() {
    this.initializeMiddlewares();
    this.initializeRestRouters();

    try {
      this.server.listen(PORT, (): void => {
        console.log(`Connected successfully on port ${PORT}`);
      });
    } catch (error) {
      console.error("Error occurred: ", error);
    }
  }
}

export default ExpressServer;
