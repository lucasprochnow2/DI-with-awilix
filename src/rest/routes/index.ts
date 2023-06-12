import { Application } from 'express';
import Container, { Service } from 'typedi';

import UserRoutes from './user/routes';

@Service()
class RestRouters {
  server: Application;
  userRoutes: UserRoutes;

  constructor(server: Application) {
    this.server = server;
    this.userRoutes = Container.get(UserRoutes);
  }

  initialize() {
    this.server.use('/user', this.userRoutes.initialize());
  }
}

export default RestRouters;
