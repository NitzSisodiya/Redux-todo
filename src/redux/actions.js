import {
  ADD_TODO,
  DELETE_TODO,
  TODO_ERROR,
  TODO_REQUEST,
  TODO_SUCCESS,
  STATUS,
  EDIT_TODO,
  EDIT,
  ADD_USER,
  LOG_IN,
  GET_USER
} from "./actionTypes";

export const addToDo = (todo) => {
  return {
    type: ADD_TODO,
    payload: todo,
   
  };
};

export const toDoDelete = (id) => {
  return {
    type: DELETE_TODO,
    payload: id,
  };
};

export const todoRequest = () => {
  return {
    type: TODO_REQUEST,
  };
};

export const todoSuccess = (list) => {
  return {
    type: TODO_SUCCESS,
    payload: {
      list
     
    },
  };
};

export const todoError = (error) => {
  return {
    type: TODO_ERROR,
    payload: error,
  };
};

export const todoStatus = (id,status) => {
  return {
    type: STATUS,
    payload:{id,status}
  };
};

export const editToDo = (id, todo) => {
  return {
    type: EDIT_TODO,
    payload: { id, todo },
  };
};

export const edit = (inputValue) => {
  return {
    type: EDIT,
    payload: inputValue,
  };
};

export const addUser = (inputValue) => {
  return {
    type: ADD_USER,
    payload: inputValue,
  };
};

export const getUser = (user) => {
  return {
    type: GET_USER,
    payload: user,
  };
};


export const userLogin = (value) => {
  return {
    type: LOG_IN,
    payload: value,
  };
};


