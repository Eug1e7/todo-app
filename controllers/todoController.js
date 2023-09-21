// controllers/todoController.js

const todoService = require("../services/todoService");

module.exports = {
  // 全てのタスクを取得
  getAll: (req, res) => {
    const tasks = todoService.getAllTasks();
    res.json(tasks);
  },

  // 指定されたIDのタスクを取得
  getById: (req, res) => {
    const id = parseInt(req.params.id, 10);
    const task = todoService.getTaskById(id);

    // タスクが見つかった場合はJSONとして返す。見つからなかった場合は404エラーを返す。
    task ? res.json(task) : res.status(404).send("Task Not Found");
  },

  // 新しいタスクを追加
  add: (req, res) => {
    const newTask = todoService.addTask(req.body.task);
    res.status(201).json(newTask);
  },

  // 指定されたIDのタスクを更新
  update: (req, res) => {
    const id = parseInt(req.params.id, 10);
    const updatedTask = todoService.updateTask(id, req.body.task);

    // タスクが更新された場合はJSONとして返す。更新できなかった場合は404エラーを返す。
    updatedTask ? res.json(updatedTask) : res.status(404).send("Task Not Found");
  },

  // 指定されたIDのタスクを削除
  delete: (req, res) => {
    const id = parseInt(req.params.id, 10);
    const deletedTask = todoService.deleteTask(id);

    // タスクが削除された場合はJSONとして返す。削除できなかった場合は404エラーを返す。
    deletedTask ? res.json(deletedTask) : res.status(404).send("Task Not Found");
  },
};
