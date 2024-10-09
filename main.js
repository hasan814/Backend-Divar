import express from "express";

async function main() {
  const app = express();
  app.listen(3000, () => {
    console.log("Server:http//localhost:3000");
  });
}

main();
