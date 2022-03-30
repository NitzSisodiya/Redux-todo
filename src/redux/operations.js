import axios from 'axios'

import { todoError, todoSuccess, todoRequest } from './actions'

export const fetchTodoList = () => {
    return (dispatch) => {
        dispatch(todoRequest);
        axios.get('https://jsonplaceholder.typicode.com/todos?userId=1 ')
            .then((response) => {
                const todo_list = response.data.map(item => {
                    return ({
                        ...item,
                        status: 'pending'
                    })
                })
                dispatch(todoSuccess(todo_list));

            })
            .catch((error) => {
                dispatch(todoError(error.message));
            })
    }
}

//  export const fetchTodoList = () => {
//     return async dispatch => {
//         try {
//             dispatch(todoRequest);
//             const response = await axios.get('https://jsonplaceholder.typicode.com/todos?userId=1 ');
//             dispatch(todoSuccess(response.data));
//             console.log("data h ye ",response.data);
//         }
//         catch(error){
//             dispatch(todoError(error.message));
//         }
//     }
// }