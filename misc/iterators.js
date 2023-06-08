/*.


forEach() is used to execute the same code on every element in an array but does not change the array and returns undefined.
.map() executes the same code on every element in an array and returns a new array with the updated elements.
.filter() checks every element in an array to see if it meets certain criteria and returns a new array with the elements that return truthy for the criteria.
.findIndex() returns the index of the first element of an array that satisfies a condition in the callback function.
 It returns -1 if none of the elements in the array satisfies the condition.
.reduce() iterates through an array and takes the values of the elements and returns a single value.
All iterator methods take a callback function, which can be a pre-defined function, a function expression, or an arrow function. 
*/


//////////////////////////////////////////////////////////////////////////
/////////////////////////////   The .forEach() Method /////////////////////
///////////////////////////////////////////////////////////////////////////
//The forEach() method in JavaScript is primarily used for iterating over elements in an array.
// .forEach() takes an argument of callback function.
//In JavaScript, the forEach() method always expects a callback function as its argument.
// You cannot pass something other than a function directly as the argument for forEach().
//However, you can pass different types of functions as the callback function. Here are some examples:


//1# Anonymous Function:

array.forEach(function(element) {
  // code to be executed for each element
});

//2# Named Function:

function myCallback(element) {
    // code to be executed for each element
  }
  
  array.forEach(myCallback);

//3# Arrow Function:

  array.forEach(element => {
    // code to be executed for each element
  });


  //EXAMPLE

const fruits = ['mango', 'papaya', 'pineapple', 'apple'];

// Iterate over fruits below
fruits.forEach(function(grocery){
console.log(`I want to eat a ${grocery}`);
});


///////////////////////////////////////////////////////////////////////////
/////////////////////////////   The .map() Method /////////////////////////
///////////////////////////////////////////////////////////////////////////
//it takes an argument of a callback function and returns a new array
//allows you to create a new array by transforming EACH element of an existing array.

const numbers = [1, 2, 3, 4, 5]; 
 
const bigNumbers1 = numbers.map(number => {
  return number * 10;
});


/// examples///

const animals = ['Hen', 'elephant', 'llama', 'leopard', 'ostrich', 'Whale', 'octopus', 'rabbit', 'lion', 'dog'];

// Create the secretMessage array below
const secretMessage = animals.map(function joe(animals){
  return animals[0];
})

console.log(secretMessage.join(''));

const bigNumbers = [100, 200, 300, 400, 500];

const smallNumbers2 = bigNumbers.map(function paul(bigNumbers){
  return bigNumbers / 100;
})

//example 2 map
const finalParticipants = ['Taylor', 'Donald', 'Don', 'Natasha', 'Bobby'];

// add string after each final participant
const announcements = finalParticipants.map(member => {
  return member + ' joined the contest.';
})

console.log(announcements);



///////////////////////////////////////////////////////////////////////////
///////////////////////////// The .filter() Method ////////////////////////
///////////////////////////////////////////////////////////////////////////

// Like .map(), .filter() returns a new array. However, .filter() returns an array of elements after filtering out certain elements from the original array.

//Call the .filter() method on randomNumbers to return values that are less than 250. Save them to a new array called smallNumbers, declared with const.
const randomNumbers = [375, 200, 3.14, 7, 13, 852];

// Call .filter() on randomNumbers below
const smallNumbers = randomNumbers.filter(function pappy(num){
  return num < 250;
})

console.log(smallNumbers);
//------------------------------
//Now let’s work with an array of strings. Invoke .filter() on the favoriteWords array to return elements that have more than 7 characters.
// Save the returned array to a const variable named longFavoriteWords.
const favoriteWords = ['nostalgia', 'hyperbole', 'fervent', 'esoteric', 'serene'];

// Call .filter() on favoriteWords below
const longFavoriteWords = favoriteWords.filter(function bob(word){
  return word.length > 7;
})

//------------------------------------------------------------------------

///////////////////////////////////////////////////////////////////////////
/////////////////////////////   The .some() Method /////////////////////
///////////////////////////////////////////////////////////////////////////

  /*The some() method is a built-in JavaScript function that tests whether at least one element in an array satisfies a given condition.
  It returns true if any element passes the condition, and false otherwise.
  The some() method stops iterating over the array as soon as it finds a matching element. */

//The syntax for using the some() method is as follows:


array.some(callback(element[, index[, array]])[, thisArg])
//callback is the function that will be called for each element in the array. It takes three arguments:

/*1*/element: //The current element being processed in the array.
/*2*/index //(optional): The index of the current element being processed.
/*3*/array //(optional): The array on which some() was called.
/*4*/thisArg //(optional): The value to use as this when executing the callback function.

//Here's an example that demonstrates the usage of some():


const numbers = [1, 2, 3, 4, 5];
const hasEvenNumber = numbers.some((element) => element % 2 === 0);
console.log(hasEvenNumber); // Output: true

/*In this example, the some() method is used to check if there is at least one even number in the numbers array. 
The callback function checks whether the current element is divisible by 2 without a remainder.
Since there is at least one even number in the array (2), the some() method returns true.
The some() method is particularly useful when you need to determine if any element in an array meets a specific condition,
 without necessarily processing the entire array. */


 ///////////////////////////////////////////////////////////////////////////
/////////////////////////////   The every() method /////////////////////
///////////////////////////////////////////////////////////////////////////

//checks if all elements in an array satisfy a given condition. Return true/false

//example ritorna vero perche tutti i numeri sono maggiori di zero
const numbers = [1, 2, 3, 4, 5];
const allPositive = numbers.every((element) => element > 0);
console.log(allPositive); // Output: true



 ///////////////////////////////////////////////////////////////////////////
/////////////////////////////   The reduce() method /////////////////////
///////////////////////////////////////////////////////////////////////////

//The .reduce() method iterates through an array and returns a single value.

/example 1
// Summing up all the elements in an array
const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((accumulator, current) => accumulator + current, 0);
console.log(sum); // Output: 15
/*in this example, the reduce() method is used to calculate the sum of all the elements in the numbers array.
 The callback function takes an accumulator (accumulator) and the current element (current), and it adds the current element to the accumulator.
  The initial value of the accumulator is set to 0. */


   ///////////////////////////////////////////////////////////////////////////
/////////////////////////////   The findIndex() method /////////////////////
///////////////////////////////////////////////////////////////////////////


  const numbers = [2, 4, 6, 8, 10];

  function isEven(element) {
    return element % 2 === 0;
  }
  
  const index = numbers.findIndex(isEven);
  console.log(index); // Output: 0