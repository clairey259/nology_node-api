const Student = require("../Models/student");

const findAll = async (req, res) => {
  const students = await Student.findAll();
  res.status(200).send(students);
};

const find = async (req, res) => {
  const student = await Student.find(req.params.id);
  res.status(200).send(student);
};

const create = (req, res) => {
  // save is an instance method so a new student needs to be created
  const newStudent = new Student(req.body);
  const message = newStudent.save();
  res.status(201).send({ message, newStudent });
};

const destroy = async (req, res) => {
  const message = await Student.destroy(req.params.id);
  res.status(204).send({ message });
};

module.exports = { findAll, find, create, destroy };
