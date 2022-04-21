import axios from "axios";

import { todoSuccess } from "./actions";

export const registerUser = (user) => {
  return () => {
    axios
      .post("http://localhost:7000/signup", user)
      .then((response) => {
        console.log("response", response);
      })
      .catch((error) => {
        alert("user already exist");
        console.log("error---", error);
      });
  };
};

export const userLogin = (user) => {
  return async (dispatch) => {
    await axios
      .post("http://localhost:7000/login", user)
      .then((res) => {
        localStorage.setItem("Token", res.data.token);
        localStorage.setItem("id", res.data.id);
        localStorage.setItem("name", res.data.name);
        const todo_list = res.data.todo_list;
        dispatch(todoSuccess(todo_list));
        window.location = "/login/todo";
      })
      .catch((error) => {
        alert("check your email id and password");
        console.log("error", error);
      });
  };
};

export const addUSerTodo = (id, todo ) => {
  const options = {
    url: "http://localhost:7000/addtodo",
    method: "post",
    headers: {
      Authorization: localStorage.getItem("Token"),
    },
    data: {
      id,
      todo,
    },
  };
  return (dispatch) => {
    axios(options)
      .then((response) => {
        console.log("response", response);
        dispatch(fetchToDoList(id));
      })
      .catch((error) => {
        console.log("error", error);
      });
  };
};

export const toDoEdit = (id, todo) => {
  const options = {
    url: "http://localhost:7000/edittodo",
    method: "post",
    headers: {
      Authorization: localStorage.getItem("Token"),
    },
    data: {
      id,
      todo,
    },
  };
  return async (dispatch) => {
    await axios(options)
      .then((response) => {
        console.log("response", response);
      })
      .catch((error) => {
        console.log("error", error);
      });
  };
};
export const delete_ToDo = (id) => {
  const options = {
    url: "http://localhost:7000/deletetodo",
    method: "delete",
    headers: {
      Authorization: localStorage.getItem("Token"),
    },
    data: {
      id,
    },
  };
  return async () => {
    axios(options)
      .then((response) => {
        console.log("response from delete", response);
      })
      .catch((e) => {
        console.log("error", e);
      });
  };
};

export const statusOfToDo = (id, userId, status) => {
  const options = {
    url: "http://localhost:7000/updatestatus",
    method: "post",
    headers: {
      Authorization: localStorage.getItem("Token"),
    },
    data: {
      id,
      userId,
      status,
    },
  };

  return async (dispatch) => {
    await axios(options).then((response) => {
      console.log("response", response);
      dispatch(fetchToDoList(userId));
    });
  };
};

export const fetchToDoList = (userId) => {
  const options = {
    url: "http://localhost:7000/fetchlist",
    method: "GET",
    headers: {
      Authorization: localStorage.getItem("Token"),
    },
    params: { userId },
  };

  return async (dispatch) => {
    try {
      const res = await axios(options);
      console.log("respose", res);
      dispatch(todoSuccess(res.data));
    } catch (e) {
      console.log("error", e);
    }
  };
};
