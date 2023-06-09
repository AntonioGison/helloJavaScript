const brainstormDinner = require('./library.js');

//this is the standard way to write it
// Native promise version:
function nativePromiseDinner() {
  brainstormDinner().then((meal) => {
	  console.log(`I'm going to make ${meal} for dinner.`);
  });
}

//await is an operator: it returns the resolved value of a promise
// async/await version:
async function announceDinner() {
  // Write your code below:
  let resolvedValue = await brainstormDinner();
  console.log(`I'm going to make ${resolvedValue} for dinner.`);
}

//invoke the await version

announceDinner();