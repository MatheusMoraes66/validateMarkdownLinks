import { warn, info, bold } from "./log.js";
import { matchFile } from "./matchLinks.js";
import { readFile } from "./readFile.js";
import { validationPath } from "./validationPath.js";
import { validationArgument } from "./validationArgument.js";
import { checkUrlStatusCode } from "./checkUrlStatusCode.js";

const log = { warn, info, bold };

export {
  log,
  validationArgument,
  checkUrlStatusCode,
  validationPath,
  matchFile,
  readFile,
};
