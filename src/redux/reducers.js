import {
  ADD_TODO,
  DELETE_TODO,
  STATUS,
  TODO_ERROR,
  TODO_REQUEST,
  TODO_SUCCESS,
  EDIT_TODO,
  ADD_USER,
  USER_INFO,
} from "./types";

const initialState = {
  list: [],
  loading: false,
  error: "",
  users: [],
  singleUser:{}
};

const TodoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      console.log("addtodo==",action.payload);
      return {
        ...state,
        list:[...state.list,{todo:action.payload}],
      };

    case DELETE_TODO:
      console.log("red.== delete")
      const updatedList = state.list.filter((li) => li._id !== action.payload);
  
      return {
        ...state,
        list:updatedList,
      };

    case TODO_REQUEST:
      return {
        ...state.list,
        loading: true,
      };

    case TODO_SUCCESS:
      console.log("reducer",action.payload);
      
      return {
        ...state,
        loading: false,
        list:action.payload.list,
        singleUser:action.payload.info,
        error: "",
      };
    case TODO_ERROR:
      return {
        loading: false,
        error: [...state.list, action.payload],
      };

    case STATUS:
      const { checkid, status } = action.payload;
      const changeStatus = state.list.find((list) => list._id === checkid);
      console.log("--list", changeStatus);
      const statusUpdated = { ...changeStatus, status: status };
      console.log("statslist", action.payload);
      const updateList = state.list.map((list) =>
        list._id === checkid ? statusUpdated : list
      );
      console.log("updtae", updateList);
      return {
        ...state,
        list: updateList
      };

    case EDIT_TODO:
      const { id,todo } = action.payload;
      console.log("edit v hello",action.payload);
      const edit_title = state.list.find((list) => list._id === id);
      const edit_item = { ...edit_title, todo: todo };
      const update_List = state.list.map((list) =>
        list._id === id ? edit_item : list
      );

      return {...state,
        list: update_List,
      };

    case ADD_USER:
      return {
        users: [...state.users, action.payload],
      };

      case USER_INFO:
      return {
        ...state,
        singleUser:  action.payload
      };

    default:
      return state;
  }
};
export default TodoReducer;




// case ADD_TODO:
//             // const { id, inputValue } = action.payload;         

//             return {...state.list,
//                 list: [...state.list, action.payload]
//             }

//         case DELETE_TODO:
//             const updatedList = state.list.filter((li) => li.id !== action.payload)
//             return {
//                 list: updatedList
//             }

//         case TODO_REQUEST:
//             return {
//                 ...state.list,
//                 loading: true
//             }

//         case TODO_SUCCESS:
            
//             return {
//                 loading: false,
//                 list: [...state.list, ...action.payload.list],
//                 error: ''
//             }
//         case TODO_ERROR:
//             return {
//                 loading: false,
//                 error: [...state.list, action.payload]
//             }

//         case STATUS: 
        
//         const { checkid, status } =action.payload;
//           const changeStatus = state.list.find(list => (
//               list.id === checkid 
//           ));
//           console.log("---------------slist",changeStatus);
//           const statusUpdated = {...changeStatus, status:status}
//           console.log("statslist",action.payload);

//           const updateList = state.list.map(list =>
//             list.id === checkid ? statusUpdated : list);
//             console.log("updtae",updateList);
//         return {
//             list: updateList
//         }
           
//         case EDIT_TODO:
           
//             const { idxk ,inputValue} = action.payload
           
//             const edit_title = state.list.find(list => (
//                 list.id === idxk  ));
           
//                 const edit_item = {...edit_title, title:inputValue}
             
//                 const update_List = state.list.map(list =>
//                     list.id === idxk ? edit_item : list);
                  
                 
//             return{
//            list:update_List  
//                  }
           
//         default: return state;