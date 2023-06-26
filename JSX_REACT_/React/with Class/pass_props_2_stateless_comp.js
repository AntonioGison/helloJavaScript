//Parent.js

import React from 'react';
import ReactDOM from 'react-dom';
import {Child} from './Child';

class Parent extends React.Component {
  constructor(props){
    super(props);
    this.state = { name: 'Frarthur' }
  }

  render() {
      //stateless child comp get a state from parent
    return <Child name={this.state.name}/>; // output Hey, my name is Frarthur!
  }
}

ReactDOM.render(<Parent/>,document.getElementById('app'));

//Child.js
import React from 'react';

export class Child extends React.Component {
  render() {
  return <h1>Hey, my name is {this.props.name}!</h1>;//Rendering is the only way for a component to pass props to another component.
  } 
}