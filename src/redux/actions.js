import {
  ADD_TODO,
  DELETE_TODO,
  TODO_SUCCESS,
  STATUS,
  EDIT_TODO,
  LOG_IN,
  GET_USER,
  STATE_PROFILE,
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

export const todoSuccess = (list) => {
  return {
    type: TODO_SUCCESS,
    payload: {
      list,
    },
  };
};

export const todoStatus = (id, status) => {
  return {
    type: STATUS,
    payload: { id, status },
  };
};

export const editToDo = (id, todo) => {
  return {
    type: EDIT_TODO,
    payload: { id, todo },
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

export const changeStateProfile = ( profile) => {
  console.log("profile=action",profile);
  return {
    type: STATE_PROFILE,
    payload: { profile },
  };
};
