import chalk from "chalk";

export function errorTemplate(errorInformation) {
  const { errorMessage, nameFolder } = errorInformation;
  const message = `\t\t\t${errorMessage}`;
  console.log(
    `\n+-----------------------------------------------------------------------+`,
  );
  console.log(chalk.cyan.bold(`Name Folder: `) + chalk.dim(nameFolder));
  console.log(chalk.white.bgRed(message));
}
