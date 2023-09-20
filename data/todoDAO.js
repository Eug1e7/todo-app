// data/todoDAO.js

const pool = require('./db');  // この行を追加

module.exports = {
  getAll: async () => {
    const { rows } = await pool.query('SELECT * FROM todos');  // この行を更新
    return rows;
  },
  getById: async (id) => {
    const { rows } = await pool.query('SELECT * FROM todos WHERE id = $1', [id]);  // この行を更新
    return rows[0];
  },
  add: async (task) => {
    const { rows } = await pool.query('INSERT INTO todos (task) VALUES ($1) RETURNING *', [task]);  // この行を更新
    return rows[0];
  },
  update: async (id, task) => {
    const { rows } = await pool.query('UPDATE todos SET task = $1 WHERE id = $2 RETURNING *', [task, id]);  // この行を更新
    return rows[0];
  },
  delete: async (id) => {
    const { rows } = await pool.query('DELETE FROM todos WHERE id = $1 RETURNING *', [id]);  // この行を更新
    return rows[0];
  }
};

