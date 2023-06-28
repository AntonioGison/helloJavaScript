

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
// Typically, an action has a payload property with an object value. This includes any information related to the action. 
//In this case, the payload is the todo text.
// When an action is generated and notifies other parts of the application, we say that the action is dispatched.


//### 2
//A reducer, or reducer function, is a plain JavaScript function that defines how the current 
//state and an action are used in combination to create the new state.

// RULES OF REDUCERS

//1) They should only calculate the new state value based on the state and action arguments.
//2) They are not allowed to modify the existing state. Instead, they must copy the existing state and make changes to the copied values.
//3) They must not do any asynchronous logic or have other “side effects”.