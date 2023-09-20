// index.js

const express = require("express");
const todoController = require("./controllers/todoController");
const app = express();
const port = 3000;

app.use(express.json());

app.get("/api/todos", todoController.getAll);
app.get("/api/todos/:id", todoController.getById);
app.post("/api/todos", todoController.add);
app.put("/api/todos/:id", todoController.update);
app.delete("/api/todos/:id", todoController.delete);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
