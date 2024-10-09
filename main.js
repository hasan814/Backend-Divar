import SwaggerConfig from "./src/config/swagger.config.js";
import mainRouter from "./src/app.routes.js";
import express from "express";
import dotenv from "dotenv";

import "./src/config/mongoose.config.js";

dotenv.config();

async function main() {
  const app = express();
  const port = process.env.PORT;
  app.use(express.json());
  app.use(express.urlencoded());
  SwaggerConfig(app);
  app.use(mainRouter);
  app.listen(process.env.PORT, () => {
    console.log(`Server: http://localhost:${port}`);
  });
}

main();
