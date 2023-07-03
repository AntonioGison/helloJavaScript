//CHILD COMPONENTS UPDATE THEIR PARENTS' STATE
//goal: we want to update the name using a dropdown menu
//https://discuss.codecademy.com/t/how-would-i-know-when-to-update-the-parents-state-through-a-child/374994
import React from 'react';
import ReactDOM from 'react-dom';
import { Child } from './child';

class Parent extends React.Component {
  constructor(props) {
    super(props);
    this.changeName = this.changeName.bind(this); //We now need to make sure that the .changeName() method will always refer to the instance of Parent, even when we pass it down to Child to use.
    this.state = { name: 'Frarthur' };
  }
  
changeName(newName) {
  this.setState({
    name: newName
  });
}

  render() {
    return <Child name={this.state.name} changeParent={this.changeName} />
  }
}

ReactDOM.render(
	<Parent />,
	document.getElementById('app')
);