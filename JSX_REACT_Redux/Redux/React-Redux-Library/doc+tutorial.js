


npm install react-redux


//Now that the react-redux library is installed, it is time to start the one-way data flow by giving the top-level <App> component 
//access to the Redux store.

//The <Provider> component from the react-redux library gives the components of an application access to the Redux 
//store without the need to pass the store directly to the React components through props. To implement this, wrap the 
//<Provider> component around the top-level component and pass store through the store prop of the <Provider>:
import {Provider} from 'react-redux'
import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './app/App.js';
import { store } from './app/store.js';
 
import { Provider } from 'react-redux'
 
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

//don't forget to import
import {Provider} from 'react-redux'


///////////////////////////////////////////////////////
///////////////////  SELECTOR  ////////////////////////
///////////////////////////////////////////////////////

//A selector function, or selector, is a pure function that selects data from the Redux store’s state.
// Each component in an application that needs access to the state will have one or more selectors that extract only the necessary
// data for that component.
export const selectFilter = state => state.filter;
 
// Select the `text` from each todo in an array.
export const selectTodoText = state => state.todos.map(
  todo => todo.text);
 
// Select the id values of completed todos in an array.
export const selectIsCompleteIDs = state => state.todos.filter(
  todo => todo.isComplete).map(todo => todo.id)

//It is a convention to give selectors a name that starts with select and that represents the specific piece of data they retrieve.

///////////////////////////////////////////////////////
///////////////////  USE SELECTOR  ////////////////////
///////////////////////////////////////////////////////

// useSelector() accomplishes two things:

// It returns data from the Redux store using selectors
// It subscribes a child component of <Provider /> to changes in the store. React, not Redux, will re-render the component
// if the data from the selector changes.

// Todos.js
import { useSelector } from 'react-redux';
import { selectTodos } from 'todosSlice.js';
 
export const Todos = () => {
  const todos = useSelector(selectTodos);
 
  return (
    <p>{todos}</p>
  )
}
//The returned value is the selected data from the Redux store and is assigned to todos.

///////////////////////////////////////////////////////
/////////////////// useDispatch()  ////////////////////
///////////////////////////////////////////////////////

//Without the react-redux library, you needed to create a reference to store.dispatch and pass it through the application’s props. 
//With react-redux you can now access this reference from each component with useDispatch().

import { useSelector, useDispatch } from 'react-redux';
import { selectTodo } from './todoSlice.js';
import { removeTodo } from './todoSlice.js';
 
const Todo = () => {
  const todo = useSelector(selectTodo);
  const dispatch = useDispatch();
 
  return (
    <button onClick={() => dispatch(removeTodo(todo))}>
      {todo}
    </button>
  )
}
