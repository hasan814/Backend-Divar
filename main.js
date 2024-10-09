import SwaggerConfig from "./src/config/swagger.config.js";
import express from "express";
import dotenv from "dotenv";

import "./src/config/mongoose.config.js";

dotenv.config();

async function main() {
  const app = express();
  const port = process.env.PORT;
  SwaggerConfig(app);
  app.listen(3000, () => {
    console.log(`Server:http//localhost:${port}`);
  });
}

main();
