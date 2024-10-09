import express from "express";
import dotenv from "dotenv";

import "./src/config/mongoose.config.js";

dotenv.config();

async function main() {
  const app = express();
  const port = process.env.PORT;
  app.listen(3000, () => {
    console.log(`Server:http//localhost:${port}`);
  });
}

main();
