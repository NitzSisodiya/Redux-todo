import axios from "axios";

import {
  todoError,
  todoSuccess,
  todoRequest,
  editToDo,
  deleteToDo,
  todoStatus,
  addToDo,
} from "./actions";

export const registerUser = (user) => {
  console.log("user form data---", user);
  return () => {
    axios
      .post("http://localhost:7000/signup", user)
      .then((response) => {
        console.log("response", response);
      })
      .catch((error) => {
        console.log("error---", error);
      });
  };
};

export const userLogin = (user) => {
  console.log("user formlogin data---", user);

  return async (dispatch) => {
    try {
      const response= await axios.post("http://localhost:7000/login", user)
      console.log("response", response);
      localStorage.setItem("Token", response.data.token);
      localStorage.setItem("id", response.data.id);
      localStorage.setItem("name", response.data.name);
      var id = response.data.id;
      var name = response.data.name;
      const user = { id: id, name: name };
      const todo_list = response.data.todo_list;
      console.log("todo list at login time ", todo_list);
      dispatch(todoSuccess(todo_list));
      return { login: true };
    } catch (error) {
      dispatch(todoError(error.message));
      return { login: false };
    }
  };
};

// try {
//           dispatch(fetchUserRequest);
//           const response = await axios.get('https://jsonplaceholder.typicode.com/users');
//           dispatch(fetchUserSuccess(response.data));
//           console.log(response.data);
//       }
//       catch(error){
//           dispatch(fetchUserError(error.message));
//       }

export const addUSerTodo = (id, todo) => {
  console.log("todo add->", id, todo);
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
      })
      .catch((error) => {
        console.log("error---", error);
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
      //  { headers:{
      //             "Authorization": localStorage.getItem("Token")
      //           },
      //   authorization: localStorage.getItem("Token"),
      //   id: id,
      //   todo: todo,
      // })
      .then((response) => {
        console.log("response", response);
        const list = response.data.todo_list;
        console.log("todo list -b", list);
        // dispatch(editToDo(list));
      })
      .catch((error) => {
        console.log("error---", error);
      });
  };
};
export const delete_ToDo = (id) => {
  console.log("delete opertion", id);
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
  console.log("status opertion", id, userId, status);
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
    });
  };
};

export const fetchToDoList = (userId) => {
  console.log("user--->", userId);
  const options = {
    url: "http://localhost:7000/fetchlist",
    method: "GET",
    headers: {
      Authorization: localStorage.getItem("Token"),
    },
    params: { userId },
  };

  return async (dispatch) => {
    await axios(options)
      .then((response) => {
        console.log("responseeee", response);
        dispatch(todoSuccess(response.data));
        console.log("data h ye ", response.data);
      })
      .catch((e) => {
        console.log("error", e);
      });
  };
};

// export const fetchTodoList = () => {
//   return (dispatch) => {
//     dispatch(todoRequest);
//     axios
//       .get("https://jsonplaceholder.typicode.com/todos?userId=1 ")
//       .then((response) => {
//         const todo_list = response.data.map((item) => {
//           return {
//             ...item,
//             status: "pending",
//           };
//         });
//         dispatch(todoSuccess(todo_list));
//       })
//       .catch((error) => {
//         dispatch(todoError(error.message));
//       });
//   };
// };
