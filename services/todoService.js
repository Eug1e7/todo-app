// services/todoService.js

const todoDAO = require("../data/todoDAO");

module.exports = {
  // 全てのタスクを取得する関数
  getAllTasks: async () => {
    try {
      return await todoDAO.getAll();
    } catch (error) {
      console.error("Error getting all tasks:", error);
      throw error;
    }
  },

  // 指定されたIDのタスクを取得する関数
  getTaskById: async (id) => {
    try {
      return await todoDAO.getById(id);
    } catch (error) {
      console.error(`Error getting task with ID ${id}:`, error);
      throw error;
    }
  },

  // 新しいタスクを追加する関数
  addTask: async (task) => {
    try {
      return await todoDAO.add(task);
    } catch (error) {
      console.error("Error adding task:", error);
      throw error;
    }
  },

  // 指定されたIDのタスクを更新する関数
  updateTask: async (id, task) => {
    try {
      return await todoDAO.update(id, task);
    } catch (error) {
      console.error(`Error updating task with ID ${id}:`, error);
      throw error;
    }
  },

  // 指定されたIDのタスクを削除する関数
  deleteTask: async (id) => {
    try {
      return await todoDAO.delete(id);
    } catch (error) {
      console.error(`Error deleting task with ID ${id}:`, error);
      throw error;
    }
  },
};
