import chalk from "chalk";

export function warn(message) {
  console.log(chalk.black.bgYellow.bold(message));
}

export function info(message) {
  console.log(chalk.black.bgWhite(message));
}

export function bold(message) {
  console.log(chalk.bold(message));
}
