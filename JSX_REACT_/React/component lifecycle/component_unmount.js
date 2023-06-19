import React from 'react';

export class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }
  render() {
    return <div>{this.state.date.toLocaleTimeString()}</div>;
  }

  //setInterval() can return an ID, which you can then pass into clearInterval() to clear it
  componentDidMount() {
    const oneSecond = 1000;
   this.intervalID = setInterval(() => {
      this.setState({ date: new Date() });
    }, oneSecond);
  }

//is called in the unmounting phase, right before the component is completely destroyed.
  componentWillUnmount(){
    clearInterval(this.intervalID);
  }
}