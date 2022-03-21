import React, {  useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToDo } from './action';

import {fetchTodoList} from './operations'

function ToDO() {
  const [inputValue, setInputValue] = useState('');
  const list = useSelector(state => state.TodoReducer)
  const dispatch = useDispatch();

  const add = () => {
    dispatch(addToDo(inputValue))
    setInputValue('');
  }

  const handleChange = (e) => {
    e.preventDefault();
    setInputValue(e.target.value);

  }
  console.log("hey", inputValue);
  console.log("hello", list)
  
  return (
    <div className="main container-fluid">
      <div className="content col-8">

        <h1> ToDO List</h1>
        <input
          type='text'
          value={inputValue}
          onChange={handleChange}
          placeholder='to do ...'
        />
        <button
          onClick={add }
        >Add</button>
        
        <div>
        <button
          onClick={ ()=> dispatch(fetchTodoList()) }
        >todos</button>
        
        </div>
        
</div>
    <div> 
      { Object.values(list).map((ele,i) => {
         return(         
            <div key={i}>
              <h4>{ele}</h4>
            </div>        
         );
       })
      }
       
     
    </div>
     
    </div>
  );
}
export default ToDO;