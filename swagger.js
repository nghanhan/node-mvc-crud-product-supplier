const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Node MVC CRUD - Product & Supplier API",
      version: "1.0.0",
      description: "RESTful API documentation with Swagger",
    },
    servers: [
      {
        url: "http://localhost:3000",
      },
    ],
  },
  apis: ["./routes/*.js"], // nơi swagger đọc để generate docs
};

const specs = swaggerJsdoc(options);

module.exports = { swaggerUi, specs };
