// data/todoDAO.js

let tasks = ["Buy groceries", "Clean the house", "Pay bills"];

module.exports = {
  getAll: () => tasks,
  getById: (id) => tasks[id],
  add: (task) => {
    tasks.push(task);
    return task;
  },
  update: (id, task) => {
    tasks[id] = task;
    return task;
  },
  delete: (id) => {
    return tasks.splice(id, 1);
  },
};
