import fs from "fs";
import { readdir } from "node:fs/promises";

export async function validationPath(path) {
  const result = [];
  if (fs.lstatSync(path).isFile()) {
    result.push(path);
  }
  if (fs.lstatSync(path).isDirectory()) {
    const listFiles = await readdir(path);

    for (const key in listFiles) {
      result.push(`${path}/${listFiles[key]}`);
    }
  }

  return result;
}
