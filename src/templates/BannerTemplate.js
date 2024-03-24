import chalk from "chalk";

export function bannerTemplate(applicationInformation) {
  const { message, version, type } = applicationInformation;
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
  console.log(
    chalk.black.bgWhite(
      `${message}   |   VERSION: ${version}   |   ${type}   `,
    ),
  );
}