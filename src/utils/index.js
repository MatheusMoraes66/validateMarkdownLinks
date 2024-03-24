import { banner, warn, info, bold, link, jumpLine, folder } from "./log.js";
import { matchFile } from "./matchLinks.js";
import { readFile } from "./readFile.js";
import { validationPath } from "./validationPath.js";
import { validationArgument } from "./validationArgument.js";
import { checkUrlStatusCode } from "./checkUrlStatusCode.js";

const log = { warn, info, banner, bold, link, jumpLine, folder };

export {
  log,
  validationArgument,
  checkUrlStatusCode,
  validationPath,
  matchFile,
  readFile,
};
