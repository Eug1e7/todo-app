// controllers/todoController.js

const todoService = require("../services/todoService");

module.exports = {
  getAll: (req, res) => res.json(todoService.getAllTasks()),
  getById: (req, res) => {
    const id = parseInt(req.params.id, 10);
    const task = todoService.getTaskById(id);
    task ? res.json(task) : res.status(404).send("Not Found");
  },
  add: (req, res) => res.status(201).json(todoService.addTask(req.body.task)),
  update: (req, res) => {
    const id = parseInt(req.params.id, 10);
    const task = todoService.updateTask(id, req.body.task);
    task ? res.json(task) : res.status(404).send("Not Found");
  },
  delete: (req, res) => {
    const id = parseInt(req.params.id, 10);
    const task = todoService.deleteTask(id);
    task ? res.json(task) : res.status(404).send("Not Found");
  },
};
