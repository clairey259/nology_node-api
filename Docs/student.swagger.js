const findAll = {
  tags: ["Students"],
  description: "GET all students - recieve a list of all the students",
  operationId: "findAll",
  responses: {
    200: {
      description: "The students were recieved",
      content: "application/json",
    },
  },
};

const find = {
  tags: ["Students"],
  description: "GET one student - recieve particular student using their id",
  operationId: "find",
  responses: {
    200: {
      description: "The student was recieved",
      content: "application/json",
    },
  },
};

const save = {
  tags: ["Students"],
  description: "POST a student - saves a student into the list of students",
  operationId: "save",
  responses: {
    201: {
      description: "The student was successfully saved",
      content: "application/json",
    },
  },
};

const destroy = {
  tags: ["Students"],
  description:
    "Deletes one student - removes a student from the list of students using their id",
  operationId: "destroy",
  responses: {
    200: {
      description: "The students was successfuly removed",
      content: "application/json",
    },
  },
};

module.exports = { findAll, find, save, destroy };
