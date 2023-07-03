/**
 * Remember the three parts of a component’s lifecycle:

Mounting, when the component is being initialized and put into the DOM for the first time
Updating, when the component updates as a result of changed state or changed props, When a component updates, it calls render() and other methods
Unmounting, when the component is being removed from the DOM
 */

import React from 'react';

export class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }
  render() {
    return (
      <div>
        {this.props.isPrecise
          ? this.state.date.toISOString()
          : this.state.date.toLocaleTimeString()}
      </div>
    );
  }
  componentDidMount() {
    const oneSecond = 1000;
    this.intervalID = setInterval(() => {
      this.setState({ date: new Date() });
    }, oneSecond);
  }
  componentWillUnmount() {
    clearInterval(this.intervalID);//This method is invoked immediately before a component is unmounted and destroyed.
    // clearing the interval, you prevent the component from continuing to update the state and re-render after it has been unmounted. 
    //This is important for preventing memory leaks and ensuring that no unnecessary updates occur for components that are
    // no longer being displayed or used.
  }
}