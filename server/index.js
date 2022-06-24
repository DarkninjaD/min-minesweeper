import chalk from "chalk";
import server from "./server.js";
const port = 8080;
server.listen(port, () =>
  console.log(chalk.green(`Server is listening on ${port}`))
);
