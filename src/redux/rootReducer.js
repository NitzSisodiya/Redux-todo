import TodoReducer from "./reducers";

import  { combineReducers } from 'redux'

const rootReducer = combineReducers({ TodoReducer })

export default rootReducer;