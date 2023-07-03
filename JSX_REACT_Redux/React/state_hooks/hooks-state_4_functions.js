

import React, { useState } from 'react';


//Tips #1
// When we call the useState() function, it returns an array with two values:

// The current state: The current value of this state.
// The state setter: A FUNCTION (YES A FUNCTION, DON'T FORGET IT) that we can use to update the value of this state.

//example

import React, { useState } from "react";
 
function Toggle() {
  const [toggle, setToggle] = useState();
 
  return (
    <div>
      <p>The toggle is {toggle}</p>
      <button onClick={() => setToggle("On")}>On</button>
      <button onClick={() => setToggle("Off")}>Off</button>
    </div>
  );
}


//-------------------------------------------------------------------------

//Tips #2
//To initialize our state with any value we want, we simply pass the initial value as an argument to the useState() function call.

const [isLoading, setIsLoading] = useState(true);
//If we don’t pass an initial value when calling useState(), the current value of the state during the first render will be undefined

//-------------------------------------------------------------------------

//tips #3
// Use State Setter Outside of JSX, in other words, outside the return ()

import React, { useState } from 'react';
 
export default function EmailTextInput() {
  const [email, setEmail] = useState('');
  const handleChange = (event) => {
    const updatedEmail = event.target.value;
    setEmail(updatedEmail);
  }
 
  return (
    <input value={email} onChange={handleChange} />
  );
}

//tips #4
//it is best practice to update a state with a callback function, preventing accidental outdated values.

import React, { useState } from 'react';
 
export default function Counter() {
  const [count, setCount] = useState(0);
 
  const increment = () => setCount(prevCount => prevCount + 1);
 
  return (
    <div>
      <p>Wow, you've clicked that button: {count} times</p>
      <button onClick={increment}>Click here!</button>
    </div>
  );
}

//Because the next value of count depends on the previous value of count, we pass a callback function as the argument for setCount()
// instead of a value (as we’ve done in previous exercises).


//tips #5
//array in state and spread operator
import React, { useState } from 'react';
 
//Static array of pizza options offered. 
const options = ['Bell Pepper', 'Sausage', 'Pepperoni', 'Pineapple'];
 
export default function PersonalPizza() {
  const [selected, setSelected] = useState([]);
 
  const toggleTopping = ({target}) => {
    const clickedTopping = target.value;
    setSelected((prev) => {
     // check if clicked topping is already selected
      if (prev.includes(clickedTopping)) {
        // filter the clicked topping out of state
        return prev.filter(t => t !== clickedTopping);
      } else {
        // add the clicked topping to our state
        return [clickedTopping, ...prev];
      }
    });
  };
 
  return (
    <div>
      {options.map(option => (
        <button value={option} onClick={toggleTopping} key={option}>
          {selected.includes(option) ? 'Remove ' : 'Add '}
          {option}
        </button>
      ))}
      <p>Order a {selected.join(', ')} pizza</p>
    </div>
  );
}
// When updating an array in a state, we do not just add new data to the previous array.
// We replace the previous array with a brand new array. This means that any information that we want to save from 
// the previous array needs to be explicitly copied over to our new array. That’s what this spread syntax does for us: ...prev.