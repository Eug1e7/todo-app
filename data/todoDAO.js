// data/todoDAO.js

const pool = require("./db");

module.exports = {
  // 全てのタスクをデータベースから取得する関数
  getAll: async () => {
    try {
      const { rows } = await pool.query("SELECT * FROM todos");
      return rows;
    } catch (error) {
      console.error("Error getting all tasks:", error);
      throw error;
    }
  },

  // 指定されたIDのタスクをデータベースから取得する関数
  getById: async (id) => {
    try {
      const { rows } = await pool.query("SELECT * FROM todos WHERE id = $1", [id]);
      return rows[0];
    } catch (error) {
      console.error(`Error getting task with ID ${id}:`, error);
      throw error;
    }
  },

  // 新しいタスクをデータベースに追加する関数
  add: async (task) => {
    try {
      const { rows } = await pool.query("INSERT INTO todos (task) VALUES ($1) RETURNING *", [task]);
      return rows[0];
    } catch (error) {
      console.error("Error adding task:", error);
      throw error;
    }
  },

  // 指定されたIDのタスクをデータベースで更新する関数
  update: async (id, task) => {
    try {
      const { rows } = await pool.query("UPDATE todos SET task = $1 WHERE id = $2 RETURNING *", [task, id]);
      return rows[0];
    } catch (error) {
      console.error(`Error updating task with ID ${id}:`, error);
      throw error;
    }
  },

  // 指定されたIDのタスクをデータベースから削除する関数
  delete: async (id) => {
    try {
      const { rows } = await pool.query("DELETE FROM todos WHERE id = $1 RETURNING *", [id]);
      return rows[0];
    } catch (error) {
      console.error(`Error deleting task with ID ${id}:`, error);
      throw error;
    }
  },
};
