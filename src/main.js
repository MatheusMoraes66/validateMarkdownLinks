#!/usr/bin/env node

import {
  log,
  readFile,
  matchFile,
  validationPath,
  validationArgument,
  checkUrlStatusCode,
} from "./utils/index.js";

import {
  bannerTemplate,
  errorTemplate,
  tableTemplate,
} from "./templates/index.js";

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
      const text = await readFile(file);

      if (!text) {
        errorTemplate({
          nameFolder: file,
          errorMessage: "This file is empty.",
        });
        continue;
      }

      const urls = matchFile(text);

      let urlsObj = [];

      for (const url of urls) {
        const statusCode = await checkUrlStatusCode(url.value);
        const obj = {
          title: url.title,
          url: url.value,
          statusCode: statusCode,
        };
        urlsObj.push(obj);
      }

      tableTemplate({
        nameFolder: file,
        urlsInformation: urlsObj,
      });
    }

    process.exit();
  } catch (err) {
    if (err.code === "ERR_INVALID_ARG_TYPE") {
      log.warn(`[${err.code}] > The path to the files was not provided.`);
      return;
    }
    console.log(err.code);
  }
})();
