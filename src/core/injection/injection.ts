import { createContainer, asClass } from "awilix";

import modulesPathList from "./modulesPathList";
import options from "./options";
import Server from "../server";

export default function injection() {
  const container = createContainer();

  container.loadModules(modulesPathList, options);
  container.register({
    server: asClass(Server).singleton(),
  });

  return container;
}
