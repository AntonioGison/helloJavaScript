//When we use the throw keyword, the error is thrown and code after the throw statement will not execute. Take for example:

throw Error('Something wrong happened');
// Error: Something wrong happened
 
console.log('This will never run');

/////////////////////////////////
//In JavaScript, we use try...catch statement to anticipate and handle errors. Take a look at example below:

try {
  throw Error('This error will get caught');
} catch (e) {
  console.log(e);
}
// Prints: This error will get caught
 
console.log('The thrown error that was caught in the try...catch statement!');
// Prints: 'The thrown error that was caught in the try...catch statement!'


//empty try catch
try{

} catch(e){
    console.log(e); //log the error
}
