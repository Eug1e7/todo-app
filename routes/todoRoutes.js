// routes/todoRoutes.js

const express = require("express");
const todoController = require("../controllers/todoController");
const router = express.Router();

router.get("/", todoController.getAll);
router.get("/:id", todoController.getById);
router.post("/", todoController.add);
router.put("/:id", todoController.update);
router.delete("/:id", todoController.delete);

module.exports = router;
