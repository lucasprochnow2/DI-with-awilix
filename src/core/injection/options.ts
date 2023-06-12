import { Lifetime } from "awilix";

import { formatName } from "./formatName";

export default {
  formatName,
  lifetime: Lifetime.SINGLETON,
};
