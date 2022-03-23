import { ADD_TODO, DELETE_TODO, STATUS, TODO_ERROR, TODO_REQUEST, TODO_SUCCESS } from "./types";

const initialState = {
    list: [],
    loading: false,
    error: '',
};

const TodoReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
            const { id, inputValue } = action.payload;         

            return {
                list: [...state.list, action.payload]
            }

        case DELETE_TODO:
            const updatedList = state.list.filter((li) => li.id !== action.payload)
            return {
                list: [...updatedList]
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
            const ref= Object.values(state.list).map(e => {
                if (e.id === action.payload.id)
                
                     return  e.status =action.payload.status
               
            })
            return {

                list: {
                    ...state.list,ref
                }
            }
        default: return state;
    }

}
export default TodoReducer;
