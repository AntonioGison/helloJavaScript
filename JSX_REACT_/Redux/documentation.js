

/**
 * ### 1
 * The application might transfer this data from the input field, add it to an array of all todos,
 *  and then render them as text on the screen. This entire interaction can be defined as an action.
 *  In Redux, actions are represented as plain JS objects.
 */

//Here’s what that action might look like:

const action = {
  type: 'todos/addTodo',
  payload: 'Take selfies'
};
// Every action must have a type property with a string value. This describes the action.
// An action has a payload property with an object value. This includes any information related to the action. 
//In this case, the payload is the todo text.
// When an action is generated and notifies other parts of the application, we say that the action is dispatched.

/////////////////////////////////////////////////////////////////////////////////

//an example of an action used in a reducer function
//to tie state and actions together, we write a function called a reducer
const reducer = (state = 0, action) => {
    switch (action.type) {
      case 'incrementByAmount':
        return state + action.payload;
      default:
        return state;
    }
  }

//An action is an object that expresses a desired change to the state. 
  const action = {
    type: 'incrementByAmount',
    payload: 2 
  };
   
  // action and reducer combined
  const newState = reducer(1, action);


//### 2
//A reducer, or reducer function, is a plain JavaScript function that defines how the current 
//state and an action are used in combination to create the new state.

// RULES OF REDUCERS

//1) They should only calculate the new state value based on the state and action arguments.
//2) They are not allowed to modify the existing state. Instead, they must copy the existing state and make changes to the copied values.
//3) They must not do any asynchronous logic or have other “side effects”.


//### 3
// Note that, plain strings, numbers, and booleans are immutable in JavaScript so we can just return them WITHOUT making a copy:

const immutator = (num) => num + 1;
const x = 5;
const updatedX = immutator(x);
 
console.log(x, updatedX); // Prints 5, 6

//### 4 
/**
 * Redux uses a special object called the store. The store acts as a container for state,
 *  it provides a way to dispatch actions, and it calls the reducer when actions are dispatched.
 *  In nearly every Redux application, there will only be one store
 */

// The createStore() helper function has a single argument, a reducer function.
/*
 to create a store with lightSwitchReducer, you could write:
*/
import { createStore } from 'redux'
 
const initialState = 'on';
const lightSwitchReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'toggle':
      return state === 'on' ? 'off' : 'on';
    default:
      return state;
  }
}
 
const store = createStore(lightSwitchReducer);

//### 4.A

//store.dispatch(), can be used to dispatch an action to the store, indicating that you wish to update the state.
// Its only argument is an action object, which must have a type property describing the desired state change.

const action = { type: 'actionDescriptor' }; 
store.dispatch(action);

//### 4.B

store.getState() // which returns the current value of the store’s state.
 
//ex 1
store.dispatch({ type: 'toggle' });
console.log(store.getState()); // Prints 'on'

//ex 2
import { createStore } from 'redux';

const initialState = 0;
const countReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'increment':
      return state + 1;
    default:
      return state;
  }
}

const store = createStore(countReducer);

// Dispatch called twice to increment twice, don't forget the {} 
store.dispatch( {type: 'increment'} );
store.dispatch({type: 'increment'});

//output: 2 don't forget to console log!
console.log(store.getState());

//###4C
//to avoid misspelling, typo etc we use action creators, basically an empty function with the action

const toggle = () => {
    return { type: "toggle" };
  }
  store.dispatch(toggle()); // Toggles the light to 'off'
  store.dispatch(toggle()); // Toggles the light back to 'on'
  store.dispatch(toggle()); // Toggles the light back to 'off'