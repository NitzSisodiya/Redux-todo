import axios from 'axios'

import { todoError,todoSuccess,todoRequest} from './action'

 export const fetchTodoList = () => {
    return async dispatch => {
        try {
            dispatch(todoRequest);
            const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
            dispatch(todoSuccess(response.data));
            console.log(response.data);
        }
        catch(error){
            dispatch(todoError(error.message));
        }
    }
}