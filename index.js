// index.js

const express = require("express");
const todoController = require("./controllers/todoController");

const app = express();
const port = 3000;

// ミドルウェアの設定
app.use(express.json());

// ルーティングの設定
app.use("/api/todos", require("./routes/todoRoutes.js"));

// サーバーの起動
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
