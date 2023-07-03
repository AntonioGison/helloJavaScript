
//If a user clicks on this <button> element, you want your passed-in talk() function to get called. 
//This means that you need to attach talk() to the <button> element as an event handler.

//talker.js
import React from 'react';
import Button from './Button';

function Talker() {
  function talk() {
    let speech = '';
    for (let i = 0; i < 10000; i++) {
      speech += 'blah ';
    }
    alert(speech);
	}
  return <Button talk={talk}/>; //this is the component button.js
}

export default Talker;


//button.js
import React from 'react';

function Button(props) {
  return (
    <button onClick={props.talk}>
      Click me!
    </button>
  );
}

export default Button;