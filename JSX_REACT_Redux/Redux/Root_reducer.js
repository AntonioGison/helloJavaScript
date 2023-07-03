// Handles only `state.todos`.
const initialTodos = [
    { id: 0, text: 'learn redux', completed: false },
    { id: 1, text: 'build a redux app', completed: true },
    { id: 2, text: 'do a dance', completed: false },
  ];
  const todosReducer = (todos = initialTodos, action) => {
    switch (action.type) {
      case 'todos/addTodo': 
        return [...todos, action.payload]
      case 'todos/toggleTodo':
        return todos.map(todo => {
          return (todo.id === action.payload.id) ? 
            { ...todo, completed: !todo.completed } : 
            {...todo};
        });
      default:
        return todos;
    }
  };
   
  // Handles only `state.filter`
  const initialFilter = 'SHOW_INCOMPLETE',
  const filterReducer = (filter = initialFilter, action) => {
    switch (action.type) {
      case 'filter/setFilter':
        return action.payload;
      default:
        return filter;
  };
   

  //it handles multiple reduced, they are divided by topic
  const rootReducer = (state = {}, action) => {
    const nextState = {
      todos: todosReducer(state.todos, action),
      filter: filterReducer(state.filter, action)
    };
    return nextState;
  };
   
  const store = createStore(rootReducer);


  /////////////////////////////////////////////////////
  ////////////////// ALTERNATIVE /////////////////////
  ///////////////////////////////////////////////////
//  The Redux package helps facilitate this pattern by providing 
// a utility function called combineReducers() which handles this boilerplate for us:


  import { createStore, combineReducers } from 'redux'
 
// todosReducer and filterReducer omitted.
 
const reducers = {
    todos: todosReducer,
    filter: filterReducer
};
const rootReducer = combineReducers(reducers);
const store = createStore(rootReducer);