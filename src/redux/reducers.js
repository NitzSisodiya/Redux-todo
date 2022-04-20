import {
  ADD_TODO,
  DELETE_TODO,
  STATUS,
  TODO_ERROR,
  TODO_REQUEST,
  TODO_SUCCESS,
  EDIT_TODO,
  ADD_USER,
} from "./types";

const initialState = {
  list: [],
  loading: false,
  error: "",
  users: [],
  singleUser: {},
};

const TodoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        list: [...state.list, { todo: action.payload }],
      };

    case DELETE_TODO:
      const updatedList = state.list.filter((li) => li._id !== action.payload);

      return {
        ...state,
        list: updatedList,
      };

    case TODO_REQUEST:
      return {
        ...state.list,
        loading: true,
      };

    case TODO_SUCCESS:
      return {
        ...state,
        loading: false,
        list: action.payload.list,
        singleUser: action.payload.info,
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
      const statusUpdated = { ...changeStatus, status: status };
      const updateList = state.list.map((list) =>
        list._id === checkid ? statusUpdated : list
      );
      return {
        ...state,
        list: updateList,
      };

    case EDIT_TODO:
      const { id, todo } = action.payload;
      const edit_title = state.list.find((list) => list._id === id);
      const edit_item = { ...edit_title, todo: todo };
      const update_List = state.list.map((list) =>
        list._id === id ? edit_item : list
      );
      return { ...state, list: update_List };

    case ADD_USER:
      return {
        users: [...state.users, action.payload],
      };

    default:
      return state;
  }
};
export default TodoReducer;
