const DB = require("./db.json")
const { saveToDatabase } = require("./utils")

const getAllTodos = () => {
  try {
    return DB.todos
  } catch (error) {
    throw { status: 500, message: error }
  }
}

const getOneTodo = (todoId) => {
  try {
    const todo = DB.todos.find((todo) => todo.id === todoId)

    if (!todo) {
      return
    }

    return todo
  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error }
  }
}

const createNewTodo = (newTodo) => {
  try {
    const isAlreadyAdded = DB.todos.findIndex((todo) => todo.description === newTodo.description) > -1
    
    if (isAlreadyAdded) {
      throw {
        status: 400,
        message: `Todo '${newTodo.description}' already exists`
      }
    }
  
    DB.todos.push(newTodo)
    saveToDatabase(DB)
    return newTodo
  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error }
  }
}

const updateOneTodo = (todoId, changes) => {
  try {
    const indexForUpdate = DB.todos.findIndex(
      (todo) => todo.id === todoId
    )
  
    if (indexForUpdate === -1) {
      return
    }
  
    const updatedtodo = {
      ...DB.todos[indexForUpdate],
      ...changes,
      updatedAt: new Date().toLocaleString("en-US", { timeZone: "CET" }),
    }
  
    DB.todos[indexForUpdate] = updatedtodo
    saveToDatabase(DB)
    return updatedtodo
  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error }
  }
}

const deleteOneTodo = (todoId) => {
  try {
    const indexForDeletion = DB.todos.findIndex(
      (todo) => todo.id === todoId
    )
  
    if (indexForDeletion === -1) {
      return
    }
  
    DB.todos.splice(indexForDeletion, 1)
    saveToDatabase(DB)
  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error }
  }
}

module.exports = {
  getAllTodos,
  getOneTodo,
  createNewTodo,
  updateOneTodo,
  deleteOneTodo
}