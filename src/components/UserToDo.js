import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import {
  addUSerTodo,
  toDoEdit,
  delete_ToDo,
  statusOfToDo,
  fetchToDoList,
} from "../redux/operations";
import { addToDo, toDoDelete, editToDo, todoStatus } from "../redux/actions";

function UserToDO() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [id, setId] = useState("");
  const [err, setErr] = useState("");
  const [check, setCheck] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [toggleButton, setToggleButton] = useState(true);

  const list = useSelector((state) => state.TodoReducer.list);
  // const user = useSelector((state) => state.TodoReducer.singleUser);  
  // console.log("list of user", list);
  const user_id = localStorage.getItem("id");
  const user_name = localStorage.getItem("name");
  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(fetchToDoList(user_id));
    }, 1000);
    return () => clearTimeout(timer);
  }, [user_id]);

  const handleChange = (e) => {
    e.preventDefault();
    setInputValue(e.target.value);
  };

  const validation = (field) => {
    if (field === "") {
      setErr("write a todo...");
    } else if (toggleButton) {
      dispatch(
        addUSerTodo(user_id, inputValue),
        dispatch(addToDo(inputValue)),
        setInputValue(""),
        setErr("")
      );
    } else {
      dispatch(
        editToDo(id, inputValue),
        dispatch(toDoEdit(id, inputValue)),
        setToggleButton(true),
        setInputValue(""),
        setErr("")
      );
    }
  };

  const edit = (id, title) => {
    setId(id);
    setInputValue(title);
    setToggleButton(false);
  };

  return (
    <div className="main  background container-fluid row m-0">
      <div className="content col-11">
        <h1 className="head"> {user_name}'s To Do List</h1>
        <div>
          <button
            type="button"
            onClick={() => (
              localStorage.removeItem("Token"),
              localStorage.removeItem("id"),
              localStorage.removeItem("name"),
              navigate("/login")
            )}
            style={{ float: "right" }}
          >
            {" "}
            log out{" "}
          </button>
        </div>
        <div>
          <label style={{marginRight:'5px'}}><b>Add your todo :</b></label>
          <input style={{marginRight:'5px'}} type="text" value={inputValue} onChange={handleChange} />
          {toggleButton ? (
            <button
              className="bttn"
              onClick={() => {
                validation(inputValue);
              }}
            >
              Add
            </button>
          ) : (
            <button
              className="bttn"
              onClick={() => {
                validation(inputValue);
              }}
            >
              edit
            </button>
          )}{" "}
          <p style={{ color: "black", fontSize: "16px" }}>{err}</p>
        </div>
        {list.length > 0 ? (
          <h3 style={{ textAlign: "center" }}>ToDO List </h3>
        ) : (
          <h3 style={{ textAlign: "center" }}>Please Add ToDo </h3>
        )}
        {<hr></hr>}

        <div className="head ">
          {list.map((list, i) => {
            const { _id, todo } = list;
            return (
              <div key={i}>
                <div className="" key={i}>
                  <table className="table">
                    <tbody>
                      <tr className="row" key={i}>
                        <td className="col-1  text-dark"> {i + 1} </td>
                        <td className="col-4 text-light"> {todo} </td>
                        <td className="col-1">
                          <span className="me-2 text-dark">
                            <FaEdit size={22} onClick={() => edit(_id, todo)} />
                          </span>
                        </td>
                        <td className="col-1">
                          <span className="ms-2 text-dark">
                            <MdDelete
                              size={22}
                              onClick={() =>
                                dispatch(
                                  toDoDelete(_id),
                                  dispatch(delete_ToDo(_id))
                                )
                              }
                            />
                          </span>
                        </td>
                        <td className="col-2">
                          <input
                            name={i}
                            type="radio"
                            value="pending"
                            onChange={(e) => {
                              dispatch(
                                statusOfToDo(_id, user_id, e.target.value),
                                dispatch(todoStatus(_id, e.target.value))
                              );
                            }}
                            defaultChecked
                          />{" "}
                          Pending
                        </td>
                        <td className="col-1">
                          <input
                            name={i}
                            type="radio"
                            value="done"
                            onChange={(e) => {
                              dispatch(
                                statusOfToDo(_id, user_id, e.target.value),
                                dispatch(todoStatus(_id, e.target.value))
                              );
                            }}
                          />{" "}
                          Done
                        </td>
                        <td className="col-2">
                          <input
                            name={i}
                            type="radio"
                            value="inprogress"
                            onChange={(e) => {
                              dispatch(
                                statusOfToDo(_id, user_id, e.target.value),
                                dispatch(todoStatus(_id, e.target.value))
                              );
                            }}
                          />{" "}
                          In progress
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
export default UserToDO;
