import { ADD_TODO, DELETE_TODO, TODO_ERROR, TODO_REQUEST, TODO_SUCCESS, STATUS, EDIT_TODO, EDIT } from "./types"

export const addToDo = (inputVal) => {
  return {
    type: ADD_TODO,
    payload: {
      id: new Date().getTime().toString(),
      // Number(list.length + 1),
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

export const statusss = (status, checkid) => {
  return {
    type: STATUS,
    payload: {
      checkid,
      status
    }
  }
}

export const editToDo = (id, inputValue) => {
  return {
    type: EDIT_TODO,
    payload: {
      id,
      inputValue
    }
  }
}

export const edit = (inputValue) => {
  return {
    type: EDIT,
    payload: inputValue
  }
}