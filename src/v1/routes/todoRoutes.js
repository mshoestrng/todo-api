const express = require("express")
const todoController = require("../../controllers/todoController")
const router = express.Router()

router.get("/", todoController.getAllTodos)
router.get("/:todoId", todoController.getOneTodo)
router.post("/", todoController.createNewTodo)
router.patch("/:todoId", todoController.updateOneTodo)
router.delete("/:todoId", todoController.deleteOneTodo)

module.exports = router