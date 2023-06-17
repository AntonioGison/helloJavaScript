/**
 * 
 * Putting Logic in a Function Component
A function component must have a return statement. However, that isn’t all that it can have.

You can also put simple calculations that need to happen before returning your JSX element within the function component.

Here’s an example of some calculations that can be done inside a function component:
 */

function RandomNumber() {
  //First, some logic that must happen before returning
  const n = Math.floor(Math.random() * 10 + 1);
  //Next, a return statement using that logic: 
  return <h1>{n}</h1>
}

//Watch out for this common mistake:

function RandomNumber() {
  return (
    const n = Math.floor(Math.random() * 10 + 1);
    <h1>{n}</h1>
  )
}
//In the above example, the line with the const n declaration will cause a syntax error, as it should come before the return.