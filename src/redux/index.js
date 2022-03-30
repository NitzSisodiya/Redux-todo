import React from 'react';
import '../index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import ToDO from './toDoList';
import store from './store'
import  { Provider } from 'react-redux'
 
 export const Index = () =>{
    return(
        <Provider store={store}>
        <ToDO />
        </Provider>
    );

}