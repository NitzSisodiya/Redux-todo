import { ADD_TODO, DELETE_TODO, STATUS, TODO_ERROR, TODO_REQUEST, TODO_SUCCESS, EDIT_TODO, EDIT } from "./types";

const initialState = {
    list: [],
    loading: false,
    error: '',
    ToggleButton:'',
    inputValue:''
};

const TodoReducer = (state = initialState, action) => {   
    switch (action.type) {
        case ADD_TODO:
            // const { id, inputValue } = action.payload;         

            return {...state.list,
                list: [...state.list, action.payload]
            }

        case DELETE_TODO:
            const updatedList = state.list.filter((li) => li.id !== action.payload)
            return {
                list: updatedList
            }

        case TODO_REQUEST:
            return {
                ...state.list,
                loading: true
            }

        case TODO_SUCCESS:
            
            return {
                loading: false,
                list: [...state.list, ...action.payload.list],
                error: ''
            }
        case TODO_ERROR:
            return {
                loading: false,
                error: [...state.list, action.payload]
            }

        case STATUS: 
        
        const { checkid, status } =action.payload;
          const changeStatus = state.list.find(list => (
              list.id === checkid 
          ));
          console.log("---------------slist",changeStatus);
          const statusUpdated = {...changeStatus, status:status}
          console.log("statslist",action.payload);

          const updateList = state.list.map(list =>
            list.id === checkid ? statusUpdated : list);
            console.log("updtae",updateList);
        return {
            list: updateList
        }
           
        case EDIT_TODO:
           
            const { idxk ,inputValue} = action.payload
           
            const edit_title = state.list.find(list => (
                list.id === idxk  ));
           
                const edit_item = {...edit_title, title:inputValue}
             
                const update_List = state.list.map(list =>
                    list.id === idxk ? edit_item : list);
                  
                 
            return{
           list:update_List  
                 }
           
        default: return state;
    }
}
export default TodoReducer;
