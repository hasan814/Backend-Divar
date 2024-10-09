import NotFoundHandler from "./src/common/exception/not-found.handler.js";
import SwaggerConfig from "./src/config/swagger.config.js";
import mainRouter from "./src/app.routes.js";
import express from "express";
import dotenv from "dotenv";

import "./src/config/mongoose.config.js";
import AllExceptionHandler from "./src/common/exception/all-exception.handler.js";

dotenv.config();

async function main() {
  const app = express();
  const port = process.env.PORT;
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(mainRouter);
  SwaggerConfig(app);
  NotFoundHandler(app);
  AllExceptionHandler(app);
  app.listen(process.env.PORT, () => {
    console.log(`Server: http://localhost:${port}`);
  });
}

main();
