// index.js

const express = require("express");
const app = express();
const port = 3000;

const tasks = ["Buy groceries", "Clean the house", "Pay bills"];

app.get("/api/todos", (req, res) => {
  res.json(tasks);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
