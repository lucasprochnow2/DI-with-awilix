import express, { Application, Router } from 'express';
import bodyParser from 'body-parser';
import { Service } from 'typedi';

import RestRouters from '../../rest/routes';

const PORT = 3000;

@Service()
class ExpressServer {
  server: Application;

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
    const restRouters = new RestRouters(this.server);
    restRouters.initialize();
  }

  initialize() {
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
