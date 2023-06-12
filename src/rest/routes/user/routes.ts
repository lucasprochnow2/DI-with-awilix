import Container, { Service } from 'typedi';

import GetUser from '../../../domain/services/user/get';
import { Router } from 'express';
import ExpressServer from '../../../core/server';

@Service()
class UserRoutes {
  router: Router;

  constructor(public getUserService: GetUser) {
    this.router = Container.get(ExpressServer).getRouter();
  }

  initialize() {
    this.router.get('/', async (_, res) => {
      res.status(200).json(this.getUserService.get());
    });

    return this.router;
  }
}

export default UserRoutes;
