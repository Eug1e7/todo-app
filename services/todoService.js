// services/todoService.js

const todoDAO = require("../data/todoDAO");

module.exports = {
  // 全てのタスクを取得する関数
  getAllTasks: () => {
    try {
      return todoDAO.getAll();
    } catch (error) {
      console.error("Error getting all tasks:", error);
      throw error;
    }
  },

  // 指定されたIDのタスクを取得する関数
  getTaskById: (id) => {
    try {
      return todoDAO.getById(id);
    } catch (error) {
      console.error(`Error getting task with ID ${id}:`, error);
      throw error;
    }
  },

  // 新しいタスクを追加する関数
  addTask: (task) => {
    try {
      return todoDAO.add(task);
    } catch (error) {
      console.error("Error adding task:", error);
      throw error;
    }
  },

  // 指定されたIDのタスクを更新する関数
  updateTask: (id, task) => {
    try {
      return todoDAO.update(id, task);
    } catch (error) {
      console.error(`Error updating task with ID ${id}:`, error);
      throw error;
    }
  },

  // 指定されたIDのタスクを削除する関数
  deleteTask: (id) => {
    try {
      return todoDAO.delete(id);
    } catch (error) {
      console.error(`Error deleting task with ID ${id}:`, error);
      throw error;
    }
  },
};
