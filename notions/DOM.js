

DEFER   <script id="blue" src="turnBlue.js" defer></script>

/*The defer attribute specifies scripts should be executed after the HTML file is completely parsed. 
When the HTML parser encounters a <script> element with the defer attribute,
it loads the script but defers the actual execution of the JavaScript until after it finishes parsing the rest of the elements in the HTML file.
*/

ASYNC       <script src="example.js" async></script>
/*The async attribute loads and executes the script asynchronously with the rest of the webpage.
if it does not matter exactly at which point the script file is executed, asynchronous loading is the most suitable option
as it optimizes web page load time. */


-------DOM----------

document.querySelector('p');

document.getElementById('bio').innerHTML = 'The description';
/*In this example, we’ve selected the element with an ID of 'bio' and set its .innerHTML to the text 'The description'. 
Notice that the ID is passed as a string, wrapped in quotation marks (' ').
 */


There are also the .getElementsByClassName() and .getElementsByTagName() methods which return an array of elements, instead of just one element. 

// Set first element of .student class as 'Not yet registered'
document.getElementsByClassName('student')[0].innerHTML = 'Not yet registered';
 
// Set second <li> tag as 'Cedric Diggory'
document.getElementsByTagName('li')[1].innerHTML = 'Cedric Diggory`;


///////////////SAVE IN VARIABLE/////////
let blueElement = document.querySelector('.blue');
blueElement.style.backgroundColor = 'blue';

////////////// PARENT NODE ///////////////////

<ul id='groceries'>
  <li id='must-have'>Toilet Paper</li>
  <li>Apples</li>
  <li>Chocolate</li>
  <li>Dumplings</li>
</ul>

In the HTML code above, we have an <ul> element with the ID of groceries with four <li> elements inside.

let parentElement = document.getElementById('must-have').parentNode; // returns <ul> element
let childElements = document.getElementById('groceries').children; // returns an array of <li> elements

//EXAMPLE: Select the first children

let first = document.querySelector('body').children[0]; //FIRST CHILDREN IS 0 element

first.innerHTML = 'BROWN BEARS ARE AWESOME!';

//create a new element

/*
In order to create an element and add it to the web page, you must assign it to be the child of an element that already exists on the DOM
*/

let paragraph = document.createElement('p');
document.body.appendChild(paragraph);