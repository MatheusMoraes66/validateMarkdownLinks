import chalk from "chalk";

export function tableTemplate(fileInformation) {
  const { nameFolder, urlsInformation } = fileInformation;
  let lines = "";
  for (const urlInformation of urlsInformation) {
    lines += `${chalk.cyan(`${urlInformation.title}: `)}${chalk.underline(urlInformation.url)}${chalk.dim(` [${urlInformation.statusCode}]`)}  \n`;
  }

  console.log(
    `\n+-----------------------------------------------------------------------+`,
  );
  console.log(chalk.cyan.bold(`Name Folder: `) + chalk.dim(nameFolder));
  console.log(lines);
}
