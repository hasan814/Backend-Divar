import swaggerUi from "swagger-ui-express";
import swaggerJSDoc from "swagger-jsdoc";

function SwaggerConfig(app) {
  const swaggerDocument = swaggerJSDoc({
    swaggerDefinition: {
      openapi: "3.0.1",
      info: {
        title: "divar-backend",
        description: "nodejs",
        version: "1.0.0",
      },
    },
    apis: [process.cwd() + "/src/modules/**/*.swagger.js"],
  });

  const swagger = swaggerUi.setup(swaggerDocument, {});
  app.use("/", swaggerUi.serve, swagger);
}

export default SwaggerConfig;
