
//props.children will return everything in between a component’s opening and closing JSX tags.

/**
 *  <List>  // opening tag
        <li></li> // child
    </List> // closing tag
 */


//App.js

import React from 'react';
import List from './List';

function App() {
  return (
    <div>
      <List type='Living Musician'>
        <li>Sachiko M</li>
        <li>Harvey Sid Fisher</li>
      </List>
      <List type='Living Cat Musician'>
        <li>Nora the Piano Cat</li>
      </List>
    </div>
  );
}

export default App;

//List.js

import React from 'react';

function List(props) {
  let titleText = `Favorite ${props.type}`;
  if (props.children instanceof Array) {
    titleText += 's';
  }
  return (
    <div>
      <h1>{titleText}</h1>
      <ul>{props.children}</ul>
    </div>
  );
}

export default List;
