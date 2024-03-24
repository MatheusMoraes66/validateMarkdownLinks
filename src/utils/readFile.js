import fs from "node:fs/promises";
import { log } from "./index.js";

const ENCODING = "utf-8";

export async function readFile(path) {
  try {
    const text = await fs.readFile(path, ENCODING);
    return text;
  } catch (err) {
      console.log(err.code);
    log.error(err);
  }
}
