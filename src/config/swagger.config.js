import swaggerUi from "swagger-ui-express";
import swaggerJSDoc from "swagger-jsdoc";

function SwaggerConfig(app) {
  const swaggerDocument = swaggerJSDoc({
    swaggerDefinition: {
      info: {
        title: "divar-backend",
        description: "modejs",
        version: "1.0.0",
      },
    },
    apis: [],
  });

  const swagger = swaggerUi.setup(swaggerDocument, {});
  app.use("/", swaggerUi.serve, swagger);
}

export default SwaggerConfig;
