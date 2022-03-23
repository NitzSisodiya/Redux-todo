import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { addToDo, statusss } from './actions';
import { fetchTodoList } from './operations'
import { deleteToDo } from './actions'

function ToDO() {
  const [inputValue, setInputValue] = useState('');
  const list = useSelector(state => state.TodoReducer.list)
  const dispatch = useDispatch();

  const handleChange = (e) => {
    e.preventDefault();
    setInputValue(e.target.value);

  }

  console.log("todo_list", list)

  return (
    <div className="main container-fluid row">
      <div className="content col-10">

        <h1 className="head"> TODO List</h1>
        <input
          type='text'
          value={inputValue}
          onChange={handleChange}
          placeholder='to do ...'
        />
        <button
          className="bttn"
          onClick={() => { dispatch(addToDo(inputValue, list), setInputValue('')) }}
        >Add</button>
        <button
          className="bttn"
          onClick={() => dispatch(fetchTodoList())}
        >todos</button>
        <div className="head">

          {Object.values(list).map((element, i) => {
            console.log("list", element.id)
            console.log("list user", list)
            return (
              <div>
                <div key={i}>
                  <table className="table">
                    <tbody>
                      <tr key={i} >
                        <td> {element.id} </td>
                        <td> {element.title} </td>
                        <td>
                          <button className="bttn"
                            onClick={() => dispatch(deleteToDo(element.id))} > Delete </button>
                        </td>
                        <td>
                          <input name={i}
                            type="radio" value='pending'
                            onClick={() => { dispatch(statusss('pending', element.id-1)) }} defaultChecked /> Pending
                        </td>
                        <td>
                          <input name={i}
                            type="radio" value='done'
                            onClick={() => { dispatch(statusss('done', element.id-1)) }} /> Done
                        </td>
                        <td>
                          <input name={i}
                            type="radio" value='inprogress'
                            onClick={() => { dispatch(statusss('inProgress', element.id-1)) }} /> In progress
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            );
          })
          }
        </div>
      </div>
    </div>
  );
}
export default ToDO;