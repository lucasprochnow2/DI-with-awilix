import { Application } from "express";

class RestRouters {
  server: Application;
  container: any;

  constructor(server: Application, container: any) {
    this.server = server;
    this.container = container;
  }

  initialize() {
    const userRoutes = this.container.resolve("userRoutes");
    this.server.use("/user", userRoutes);
  }
}

export default RestRouters;
