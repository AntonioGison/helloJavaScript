

/* Notice that props.signedIn is not located inside of a return statement.
 * This means that Greeting will never display the value of signedIn.
 * But Greeting will use that value to decide which message to display. */
import React from 'react';

function Greeting(props) {
  if (props.signedIn == false) {
    return <h1>Please login.</h1>;
  } else {
    return (
      <>
        <h1>Welcome back, {props.name}!</h1>
        <article>
          Latest Movie: A Computer Bug's Life
        </article>
      </>
    )
  }
}

export default Greeting;