import React from 'react';

export class Child extends React.Component {
 constructor(props) {
  super(props);
  //As with all methods that we pass in React, we must first bind this to our new method (handleChange) to the current instance of Child.
  this.handleChange = this.handleChange.bind(this);
}
  handleChange(e) {
  const name = e.target.value;
  this.props.onChange(name);
}

  render() {
    return (
      <div>
        <h1>
          Hey my name is {this.props.name}!
        </h1>
        <select id="great-names" onChange={this.handleChange}>
          <option value="Frarthur">
            Frarthur
          </option>

          <option value="Gromulus">
            Gromulus
          </option>

          <option value="Thinkpiece">
            Thinkpiece
          </option>
        </select>
      </div>
    );
  }
}