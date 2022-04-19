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
  USER_INFO,
} from "./types";

export const addToDo = (todo) => {
  console.log("action todo ", todo);
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
  console.log("edit to do    990909==>", id, todo);
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

export const userLogin = (value) => {
  return {
    type: LOG_IN,
    payload: value,
  };
};

export const userInfo = (info) => {
  return {
    type: USER_INFO,
    payload: info,
  };
};
