import { ADD_TODO, DELETE_TODO, TODO_ERROR, TODO_REQUEST, TODO_SUCCESS } from "./types"


export const addToDo = (data) => {
  return{
    type:ADD_TODO,
    payload:data
  }
};

export const deleteToDo = () => {
 return{
   type:DELETE_TODO
 }
}

export const todoRequest = () => {
  return{
      type:TODO_REQUEST,
  }
}

export const todoSuccess = (list) => {
  return{
      type:TODO_SUCCESS,
      payload: list
  }
}

export const todoError = (error) => {
  return{
      type: TODO_ERROR,
      payload: error
  }
}