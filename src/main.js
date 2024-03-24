#!/usr/bin/env node

import {
  log,
  readFile,
  matchFile,
  validationPath,
  validationArgument,
  checkUrlStatusCode,
} from "./utils/index.js";

import { bannerTemplate } from "./templates/index.js";

const applicationInformation = {
  message: "Running program to test Markdown file links",
  version: "1.0.0",
  type: "CLI",
};

(async () => {
  bannerTemplate(applicationInformation);
  try {
    const argv = validationArgument(process.argv);
    const files = await validationPath(argv.folder);
    for (const file of files) {
      log.jumpLine();
      log.folder(`Name File`, file);
      const text = await readFile(file);

      if (!text) {
        log.warn("Text cannot be read");
      }

      const links = matchFile(text);

      for (const link of links) {
        const statusCode = await checkUrlStatusCode(link.url);

        log.link(link.title, link.url, argv.validation ? statusCode : "");
      }
    }
  } catch (err) {
    if (err.code === "ERR_INVALID_ARG_TYPE") {
      log.warn(`[${err.code}] > The path to the files was not provided.`);
      return;
    }
    console.log(err.code);
  }
})();
