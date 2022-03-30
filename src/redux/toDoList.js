import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { addToDo, statusss, editToDo } from './actions';
import { fetchTodoList } from './operations'
import { deleteToDo } from './actions'
import { MdDelete } from 'react-icons/md'
import { FaEdit } from 'react-icons/fa'

function ToDO() {
  const [id, setId] = useState('');
  const [inputValue, setInputValue] = useState('');
  const [toggleButton, setToggleButton] = useState(true);

  const list = useSelector(state => state.TodoReducer.list)
  const dispatch = useDispatch();

  const handleChange = (e) => {
    e.preventDefault();
    setInputValue(e.target.value);
  }

  const hello = (id, title) => {
    setId(id)
    setInputValue(title)
    setToggleButton(false)
  }

  // console.log("todo_list", list)
  // console.log( "length",list.length)
  return (
    <div className="main container-fluid row">
      <div className="content col-11">

        <h1 className="head"> TODO List</h1>
        <div  >
          <input
            type='text'
            value={inputValue}
            onChange={handleChange}
            placeholder='to do ...'
          />
          {
            toggleButton ?
              (<button
                className="bttn"
                onClick={() => { dispatch(addToDo(inputValue, list), setInputValue('')) }}
              >Add</button>) :
              (<button
                className="bttn"
                onClick={() => { dispatch(editToDo(id, inputValue), setToggleButton(true), setInputValue('')) }}
              >edit</button>
              )
          }
          <button
            className="bttn"
            onClick={() => dispatch(fetchTodoList())}
          >todos</button>
        </div>
        {(list.length > 0) ? <h3 style={{ textAlign: 'center' }}>ToDO List </h3> : <h3 style={{ textAlign: 'center' }}>Please Add ToDo </h3>}
{<hr></hr>}
        <div className="head ">
          {Object.values(list).map((element, i) => {
            const { id, title } = element;

            return (

              <div>

                <div  className="" key={i}>
                  <table className="table">
                    <tbody>
                      <tr className="row" key={i} >
                        <td className="col-1  text-dark" > {id} </td>
                        <td className="col-4 text-light" > {title} </td>
                        
                        <td className="col-1" >
                          <span  className="me-2 text-dark">
                            <FaEdit size={22} onClick={() => hello(id, title)} />
                          </span>
                          </td>
                        <td className="col-1" >
                             <span className="ms-2 text-dark"> 
                           <MdDelete size={22}  onClick={() => dispatch(deleteToDo(id))} />
                         </span>
                        </td>
                        <td className="col-2" >
                          <input name={i}
                            type="radio" value='pending'
                            onChange={(e) => { dispatch(statusss(e.target.value, id)) }} defaultChecked /> Pending
                        </td>
                        <td className="col-1" >
                          <input name={i}
                            type="radio" value='done'
                            onChange={(e) => { dispatch(statusss(e.target.value, id)) }} /> Done
                        </td>
                        <td className="col-2" >
                          <input name={i}
                            type="radio" value='inprogress'
                            onChange={(e) => { dispatch(statusss(e.target.value, id)) }} /> In progress
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