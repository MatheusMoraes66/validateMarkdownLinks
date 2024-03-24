import chalk from "chalk";

export function warn(message) {
  console.log("\n" + chalk.black.bgYellow.bold(message));
}

export function info(message) {
  console.log(chalk.black.bgWhite(message));
}

export function bold(message) {
  console.log(chalk.bold(message));
}

export function link(title, link, statusCode) {
  console.log(
    chalk.cyan(`${title}: `) +
      chalk.underline(link) +
      chalk.dim(` [${statusCode}]`),
  );
}

export function folder(title, link) {
  console.log(chalk.cyan.bold(`${title}: `) + chalk.dim(link));
}

export function jumpLine() {
  console.log(
    `\n+-----------------------------------------------------------------------+`,
  );
}

export function banner(message) {
  console.log(`
+-----------------------------------------------------------------------+
| /$$$$$$$  /$$$$$$$$  /$$$$$$  /$$$$$$$          /$$      /$$ /$$$$$$$ |
|| $$__  $$| $$_____/ /$$__  $$| $$__  $$        | $$$    /$$$| $$__  $$|
|| $$    $$| $$      | $$    $$| $$    $$        | $$$$  /$$$$| $$    $$|
|| $$$$$$$ | $$$$$   | $$$$$$$$| $$  | $$ /$$$$$$| $$ $$/$$ $$| $$  | $$|
|| $$__  $$| $$__/   | $$__  $$| $$  | $$|______/| $$  $$$| $$| $$  | $$|
|| $$    $$| $$      | $$  | $$| $$  | $$        | $$   $ | $$| $$  | $$|
|| $$  | $$| $$$$$$$$| $$  | $$| $$$$$$$/        | $$  /  | $$| $$$$$$$/|
||__/  |__/|________/|__/  |__/|_______/         |__/     |__/|_______/ |
+-----------------------------------------------------------------------+`);
  console.log(chalk.black.bgWhite(message));
}
