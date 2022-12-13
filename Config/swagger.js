const students = require("../docs/student.swagger");

const swaggerDocument = {
  openapi: "3.0.0",
  info: {
    version: "1.0.0",
    title: "Claires Node API",
    description:
      "The API I built as part of module 8 of the _Nology self-paced course.",
    contact: {
      name: "Claire Huizenga",
      email: "claire.huizenga@outlook.com",
      url: "https://github.com/clairey259",
    },
  },
  server: {
    url: 'http://localhost:3000/',
    description: "local host",
  },
  name_tags: {
    name: "Students",
  },
  paths: {
    "/api/students": {
      get: students.findAll,
      post: students.save,
    },
    "/api/stuents/:id": {
      get: students.find,
      delete: students.destroy,
    },
  },
};

module.exports = { swaggerDocument };
