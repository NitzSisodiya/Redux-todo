import axios from "axios";

import { todoSuccess, getUser } from "./actions";

export const registerUser = (formData) => {
  return () => {
    axios
      .post("http://localhost:7000/signup", formData)
      .then((response) => {
        console.log("response-signup", response.data);
        alert(response.data)
        window.location = "/login";
      })
      .catch((error) => {
        alert("registration failed!");
        console.log("error---", error);
      });
  };
};

export const getUserProfile = (id) => {
  return async (dispatch) => {
    await axios
      .get(`http://localhost:7000/profile/${id}`)
      .then((response) => {
        console.log("response-get profile", response)
        const user = response.data;
        dispatch(getUser(user))
      }).catch((error) => {
        console.log("error", error);
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

export const addUSerTodo = (id, todo) => {
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
    method: "put",
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
    url: `http://localhost:7000/deletetodo/${id}`,
    method: "delete",
    headers: {
      Authorization: localStorage.getItem("Token"),
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
    method: "put",
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

// export const fetchToDoList = (userId) => {
//   const options = {
//     url: `http://localhost:7000/fetchlist/${userId}`,
//     method: "GET",
//     headers: {
//       Authorization: localStorage.getItem("Token"),
//     },
//     params: { userId: userId}
//   };

//   return async (dispatch) => {
//     try {
//       const res = await axios(options);
//       console.log("respose", res);
//       dispatch(todoSuccess(res.data));
//     } catch (e) {
//       console.log("error", e);
//     }
//   };
// };

export const uploadProfile = (id,data) => {
  const options = {
    url: `http://localhost:7000/uploadprofile/${id}`,
    method: "put",
    headers: {
      Authorization: localStorage.getItem("Token"),
    },
    data:data,
  };

  return async (dispatch) => {
    try {
      const res = await axios(options);
      console.log("respose", res);
      alert("uploaded successfully!")
    } catch (e) {
      console.log("error", e);
    }
  };
};
