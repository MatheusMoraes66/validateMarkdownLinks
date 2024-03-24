import chalk from "chalk";

export function endTemplate() {
  console.log(
    chalk.black.bgGreen(
      `+-----------------------------------------------------------------------+`,
    ),
  );
  console.log(
    chalk.green.dim(
      `+----------------------------End of execution---------------------------+`,
    ),
  );
  console.log(
    chalk.black.bgGreen(
      `+-----------------------------------------------------------------------+`,
    ),
  );
}
