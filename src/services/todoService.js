const { v4: uuid } = require("uuid") 
const Todo = require("../database/Todo")

const getAllTodos = () => {
  try {
    const allTodos = Todo.getAllTodos()
    return allTodos
  } catch (error) {
    throw error
  }
}

const getOneTodo = (todoId) => {
  try {
    const todo = Todo.getOneTodo(todoId)
    return todo
  } catch (error) {
    throw error
  }
}

const createNewTodo = (newTodo) => {
  const todoToInsert = {
    ...newTodo,
    id: uuid(),
    createdAt: new Date().toLocaleString("en-US", { timeZone: "CET" }),
    updatedAt: new Date().toLocaleString("en-US", { timeZone: "CET" }),
  }
  
  try {
    const createdTodo = Todo.createNewTodo(todoToInsert)
    return createdTodo
  } catch (error) {
    throw error
  }
}

const updateOneTodo = (todoId, changes) => {
  try {
    const updatedTodo = Todo.updateOneTodo(todoId, changes)
    return updatedTodo
  } catch (error) {
    throw error
  }
}

const deleteOneTodo = (todoId) => {
  try {
    Todo.deleteOneTodo(todoId)
  } catch (error) {
    throw error
  }
}

module.exports = {
  getAllTodos,
  getOneTodo,
  createNewTodo,
  updateOneTodo,
  deleteOneTodo
}