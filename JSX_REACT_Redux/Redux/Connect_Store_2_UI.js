// Connecting a Redux store with any UI requires a few consistent steps, regardless of how the UI is implemented:

// Create a Redux store
// Render the initial state of the application.
// Subscribe to updates. Inside the subscription callback:
// Get the current store state
// Select the data needed by this piece of UI
// Update the UI with the data
// Respond to UI events by dispatching Redux actions

// These same steps are followed when building an interface using React, Angular, or jQuery.

/* Note to learners: 
Normally, you would import redux like this:

  import { createStore } from 'redux';

Due to Codecademy's technical limitations 
for testing this exercise, we are using 
`require()`.
*/
const { createStore } = require('redux');

// Action Creators
function increment() { 
  return {type: 'increment'}
}

function decrement() { 
  return {type: 'decrement'}
}

// Reducer / Store
const initialState = 0;
const countReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'increment':
      return state + 1; 
    case 'decrement':
      return state - 1; 
    default:
      return state;
  }
};  
const store = createStore(countReducer);

// HTML Elements (you need an html page and the appropriate html tags inorder to work this example)
const counterElement = document.getElementById('counter');
//this is the + button
const incrementer = document.getElementById('incrementer');
//this is the - button
const decrementer = document.getElementById('decrementer');

// Store State Change Listener
const render = () => {
  counterElement.innerHTML = store.getState();
  
}

render();
//we have subscribed so that the UI update the status
//you can't see on the screen but everytime you
//press the + or - button it updates the state automatically
//and shows within the UI element //output: +1 when press on +
store.subscribe(render);

// DOM Event Handlers
const incrementerClicked = () => {
  store.dispatch(increment())
}
incrementer.addEventListener('click', incrementerClicked);
 
const decrementerClicked = () => {
  store.dispatch(decrement())
}
decrementer.addEventListener('click', decrementerClicked);




