const todoService = require("../services/todoService")

const getAllTodos = (req, res) => {
  try {
    const allTodos = todoService.getAllTodos()
    res.send({
      status: "OK",
      data: allTodos
    })
  } catch (error) {
    res
      .status(error?.status || error)
      .send({ status: "FAILED", data: { error: error?.message || error }})
  }
}

const getOneTodo = (req, res) => {
  const {
    params: { todoId }
  } = req
  
  if (!todoId) {
    return
  }
  
  try {
    const todo = todoService.getOneTodo(todoId)
    res.send({ status: "OK", data:todo })
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } })
  }
}

const createNewTodo = (req, res) => {
  const {body} = req
  
  if (!body.description) {
    res
      .status(400)
      .send({
        status: "failed",
        data: {
          error: "description is missing or is empty in request body"
        }
      })
    return
  }
  
  const newTodo = {
    description: body.description
  }
  
  try {
    const createdTodo = todoService.createNewTodo(newTodo)
    res.status(201).send({ status: "OK", data: createdTodo })
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "failed", data: { error: error?.message || error}})
  }
}

const updateOneTodo = (req, res) => {
  const {
    body,
    params: { todoId }
  } = req
  
  if (!todoId) {    
    res
      .status(400)
      .send({
        status: "FAILED",
        data: { error: "Parameter ':todoId' can not be empty" },
      })
  }
  
  try {
    const updatedTodo = todoService.updateOneTodo(todoId, body)
    res.send({ status: "OK", data: updatedTodo })
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } })
  }
}

const deleteOneTodo = (req, res) => {
  const {
    params: { todoId },
  } = req
  
  if (!todoId) {
    res
      .status(400)
      .send({
        status: "FAILED",
        data: { error: "Parameter ':todoId' can not be empty" },
      })
  }
  
  try {
    todoService.deleteOneTodo(todoId)
    res.status(204).send({ status: "OK" })
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } })
  }
}

module.exports = {
  getAllTodos,
  getOneTodo,
  createNewTodo,
  updateOneTodo,
  deleteOneTodo
}