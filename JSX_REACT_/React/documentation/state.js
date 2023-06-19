//Unlike props, a component’s state is not passed in from the outside. A component decides its own state.
//full explanation continues at the bottom, read the whole file
/**
 * To make a component have state, give the component a state property. This property should be declared inside of a constructor method, like this:
 */

class Example extends React.Component {
    constructor(props) {
      super(props);
      this.state = { mood: 'decent' }; //this.state should be equal to an object. This object represents the initial “state” of any component instance. 
    }
   
    render() {
      return <div></div>;
    }
  }
   
  <Example />

  //It is important to note that React components always have to call super in their constructors to be set up properly.

//---------------------------------
  //Access a Component's state
//To read a component’s state, use the expression this.state.name-of-property:

  class TodayImFeeling extends React.Component {
    constructor(props) {
      super(props);
      this.state = { mood: 'decent' };
    }
   
    render() {
      return (
        <h1>
          I'm feeling {this.state.mood}! 
        </h1>  //this.state.name-of-property
      );
    }
  }

  //-------------------------------------

  //Update state with this.setState
//A component changes its state by calling the function this.setState().
//this.setState() takes two arguments: an object that will update the component’s state, and a callback. You basically never need the callback.


import React from 'react';

class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mood: 'great',
      hungry: false
    };
  }

  updateMood = () => {
    this.setState({ mood: 'excited' });
  };

  toggleHungry = () => {
    this.setState((prevState) => ({ hungry: !prevState.hungry }));
  };

  render() {
    return (
      <div>
        <p>Mood: {this.state.mood}</p>
        <p>Hungry: {this.state.hungry ? 'Yes' : 'No'}</p>
        <button onClick={this.updateMood}>Update Mood</button>
        <button onClick={this.toggleHungry}>Toggle Hungry</button>
      </div>
    );
  }
}

export default Example;

//-----------------------------------------------------------

//Call this.setState from Another Function
//The most common way to call this.setState() is to call a custom function that wraps a this.setState() call. .makeSomeFog() is an example:



class Example extends React.Component {
    constructor(props) {
      super(props);
      this.state = { weather: 'sunny' };
      this.makeSomeFog = this.makeSomeFog.bind(this);
    }//whenever you define an event handler that uses "this", you need to add this.methodName = this.methodName.bind(this) to your constructor function.
   
    makeSomeFog() {
      this.setState({
        weather: 'foggy'
      });
    }
  }
  //IMPORTANT: you can’t call this.setState() from inside of the render function!
  

