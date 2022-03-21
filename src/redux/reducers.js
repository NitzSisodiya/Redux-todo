import { ADD_TODO, DELETE_TODO, TODO_ERROR, TODO_REQUEST, TODO_SUCCESS } from "./types";

const initialState = {
    list:['harry'],
    loading:false,
    error:''
   };

const TodoReducer = (state= initialState, action) => {
    switch(action.type){
        case ADD_TODO:
              const   inputValue  =action.payload;
              console.log("uli",state.list);
              console.log("u",inputValue);
 
                    return {        
                list:[...state.list, inputValue]
            }
            case DELETE_TODO:
                return{

                }

            case TODO_REQUEST:
                return{
                    ...state.list,
                    loading:true
                }

            case TODO_SUCCESS:
                return{
                    loading:false,
                    list:[...state.list,action.payload],
                    error:''
                }
                case TODO_ERROR:
                    return{
                        loading:false,
                        
                        error:[...state.list,action.payload]
                    }
            default: return state;
        }
    }
 export default TodoReducer;