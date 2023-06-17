
//BUTTON. JS
import React from 'react';

function SubmitButton() {
  function handleClick() {
    alert('Submission Successful.');
  }
  return <button onClick={handleClick}>Submit</button>;
}

export default SubmitButton;


//APP.JS
import React from 'react';
import ReactDOM from 'react-dom';

import Button from './Button'

function App() {
  return <Button />;
}

export default App;