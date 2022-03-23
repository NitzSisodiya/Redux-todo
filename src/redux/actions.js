import { ADD_TODO, DELETE_TODO, TODO_ERROR, TODO_REQUEST, TODO_SUCCESS,  STATUS } from "./types"

export const addToDo = (inputVal, list) => {
  

  return {
    type: ADD_TODO,
    payload: {
      id: Number(list.length + 1),
      title: inputVal,
      status: 'pending'
    }
  }
};

export const deleteToDo = (id) => {
  return {
    type: DELETE_TODO,
    payload: id
  }
}

export const todoRequest = () => {
  return {
    type: TODO_REQUEST,
  }
}

export const todoSuccess = (list) => {
  return {
    type: TODO_SUCCESS,
    payload: {
      list
    }
  }
}

export const todoError = (error) => {
  return {
    type: TODO_ERROR,
    payload: error
  }
}

export const statusss =(status,id) =>{
  return{
    type:STATUS,
    payload:{
      id,
      status}
  }
}