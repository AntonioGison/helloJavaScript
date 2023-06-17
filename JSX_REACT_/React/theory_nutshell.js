/**COMPONENT
 * In react everything is divided in component

function mycomponent create a component, when you write a component into a file, then you want to pass it to app.js then index.js
for example  PropsDisplayer was written in PropsDisplayer.js then passed into app.js then used into index.js
when you pass it to a new file, to call it you use <PropsDisplayer /> don't forget the /> at the end
 */

//-------------------------------------------------------

/**PROPS
 * Props are like argument for functions

How do we pass props? By giving the component an attribute:
 */

<Greeting name="Jamel" />

//If you want to pass information that isn’t a string, then wrap that information in curly braces. Here’s how you would pass an array:

<Greeting myInfo={["Astronaut", "Narek", "43"]} />

//In this next example, we pass several pieces of information to <Greeting />. The values that aren’t strings are wrapped in curly braces:

<Greeting name="The Queen Mary" city="Long Beach, California" age={56} haunted={true} />


//-------------------------------------------------------


//To make sure that a function component can use the props object, define your function component with props as the parameter:

function Button(props) {
  return <button>{props.displayText}</button>;
}
//In the example, props is accepted as a parameter, and the object values are accessed with the dot notation accessors pattern (object.propertyName).
//NOTE: In this case, the props parameter is not an object itself, but it is used to access the properties passed to the Product component. 
//The props parameter is a convention in React components to receive and access data from the parent component.

//Alternatively, since props is an object, you can also use destructuring syntax like so:

function Button({displayText}) {
  return <button>{displayText}</button>;
}
//-------------------------------------------------------
//EXAMPLE
//App.js
import React from 'react';
import Product from './Product'

function App() {
  return <Product name="Apple Watch" price = {399} rating = "4.5/5.0" />;
}

export default App;

//Product.js

import React from 'react';

function Product(props) {
  return (
    <div>
      <h1>{props.name}</h1>
      <h2>{props.price}</h2>
      <h3>{props.rating}</h3>
    </div>       
  );
}

export default Product;

//-------------------------------------------------------
//Other things with props

You can do more with props than just display them. You can also use props to make decisions.

function LoginMsg(props) {
  if (props.password === 'a-tough-password') {
    return <h2>Sign In Successful.</h2>
  } else {
    return <h2>Sign In Failed..</h2>
  }
}
In this example, we use the props passed in to make a decision rather than rendering the value to the screen.

