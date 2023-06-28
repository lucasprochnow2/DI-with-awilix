import { LoadedModuleDescriptor } from "awilix/lib/load-modules";

type PathSplit = string[];

const namespaceMapper = new Map([
  ["services", "service"],
  ["repositories", "repository"],
]);

// Service / Repository
const getFormattedNamespace = (pathSplit: PathSplit) => {
  const rawNamespace =
    namespaceMapper.get(pathSplit[pathSplit.length - 3]) || "";
  return rawNamespace.charAt(0).toUpperCase() + rawNamespace.substring(1);
};

// User
const getFormattedEntityName = (pathSplit: PathSplit) => {
  const rawEntityName = pathSplit[pathSplit.length - 2];
  return rawEntityName.charAt(0).toUpperCase() + rawEntityName.substring(1);
};

export const formatName = (_: string, descriptor: LoadedModuleDescriptor) => {
  const fileName = descriptor.name;
  const pathSplit = descriptor.path.split("/");

  const namespace = getFormattedNamespace(pathSplit);
  const entity = getFormattedEntityName(pathSplit);

  return fileName + entity + namespace;
};
