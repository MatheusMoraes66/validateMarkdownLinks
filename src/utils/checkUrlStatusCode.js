import { log } from "./index.js";

export async function checkUrlStatusCode(url) {
  try {
    const { status, statusText } = await fetch(url);
    return `${status} - ${statusText}`;
  } catch (err) {
    log.warn(err);
    return null;
  }
}
