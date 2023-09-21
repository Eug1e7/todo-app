// index.js

const express = require("express");
const todoController = require("./controllers/todoController");

const app = express();
const port = 3000;

const morgan = require("morgan");

const cors = require("cors");

// ミドルウェアの設定
app.use(express.json());

// CORSミドルウェアの使用
app.use(cors());

// ルーティングの設定
app.use("/api/todos", require("./routes/todoRoutes.js"));

// サーバーの起動
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});

// エラーログの設定
app.use(morgan("dev"));
