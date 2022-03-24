import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { addToDo, statusss, editToDo ,edit} from './actions';
import { fetchTodoList } from './operations'
import { deleteToDo } from './actions'

function ToDO() {
  const [id,setId]=useState('');
  const [inputValue, setInputValue] = useState('');
  const [toggleButton, setToggleButton] = useState(true);
  
  const list = useSelector(state => state.TodoReducer.list)
  const dispatch = useDispatch();

  const handleChange = (e) => {
    e.preventDefault();
    setInputValue(e.target.value);
  }
  
  const hello = (id,title)=>{
    setId(id)
    setInputValue(title)
    setToggleButton(false)
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
        {
          toggleButton ?
            (<button
              className="bttn"
              onClick={() => { dispatch(addToDo(inputValue, list), setInputValue('')) }}
            >Add</button>) :
            (<button
              className="bttn"
              onClick={() => { dispatch(editToDo(id,inputValue), setToggleButton(true),setInputValue('')) }}
            >edit</button>
            )
        }
        <button
          className="bttn"
          onClick={() => dispatch(fetchTodoList())}
        >todos</button>
        <div className="head">

          {Object.values(list).map((element, i) => {
            
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
                            onClick={() =>hello(element.id,element.title) } > Edit </button>
                        </td>
                        <td>
                          <button className="bttn"
                            onClick={() => dispatch(deleteToDo(element.id))} > Delete </button>
                        </td>
                        <td>
                          <input name={i}
                            type="radio" value='pending'
                            onChange={(e) => { dispatch(statusss(e.target.value, element.id)) }} defaultChecked /> Pending
                        </td>
                        <td>
                          <input name={i}
                            type="radio" value='done'
                            onChange={(e) => { dispatch(statusss(e.target.value, element.id)) }} /> Done
                        </td>
                        <td>
                          <input name={i}
                            type="radio" value='inprogress'
                            onChange={(e) => { dispatch(statusss(e.target.value, element.id)) }} /> In progress
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