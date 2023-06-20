import { AwilixContainer } from "awilix";
import { Application } from "express";

class RestRouters {
  server: Application;
  container: AwilixContainer;

  constructor(server: Application, container: AwilixContainer) {
    this.server = server;
    this.container = container;
  }

  initialize() {
    const userRoutes = this.container.resolve("userRoutes");
    this.server.use("/user", userRoutes);
  }
}

export default RestRouters;
