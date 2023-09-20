// services/todoService.js

const todoDAO = require("../data/todoDAO");

module.exports = {
  getAllTasks: () => todoDAO.getAll(),
  getTaskById: (id) => todoDAO.getById(id),
  addTask: (task) => todoDAO.add(task),
  updateTask: (id, task) => todoDAO.update(id, task),
  deleteTask: (id) => todoDAO.delete(id),
};
