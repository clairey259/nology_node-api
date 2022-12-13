const express = require("express");
const swaggerUI = require("swagger-ui-express");

const { swaggerDocument } = require("./Config/swagger.js");

const router = require("./Routes/students.js");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.use("/api/students", router);
app.get("/api", (req, res) => res.send("welcome to my API!!"));

app.use("/api/docs", swaggerUI.serve, swaggerUI.setup(swaggerDocument));

app.get("*", (req, res) =>
  res.status(404).send("There is no content at this route")
);

app.listen(port, (req, res) =>
  console.log(`Server is running on port ${port}`)
);
