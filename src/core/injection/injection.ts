import { AwilixContainer, createContainer } from "awilix";

import modulesPathList from "./modulesPathList";
import options from "./options";

export default function injection(): AwilixContainer {
  const container = createContainer();

  container.loadModules(modulesPathList, options);

  return container;
}
