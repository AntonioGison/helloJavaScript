/*Renaming Imports to Avoid Naming Collisions
Inevitably, you will run into a situation where the resources you wish to import share a name with some other value that already exists in your program (or from another imported module).

//For example, suppose you had access to two modules, greeterEspanol.js and greeterFrancais.js. Each exports a function called greet():
*/
/* inside greeterEspanol.js */
const greet = () => {
  console.log('hola');
}
export { greet };
 
/* inside greeterFrancais.js */
const greet = () => {
  console.log('bonjour');
}
export { greet };
//Now, let’s say you wanted to use each of these functions in a program, called main.js, that simulates a conversation between a spanish-speaker and a french-speaker.

import { greet } from 'greeterEspanol.js';
import { greet } from 'greeterFrancais.js'; //error

The code above will throw an error on line 2 due to the fact that the identifier greet has already been defined on line 1. Thankfully, ES6 includes syntax for renaming imported resources by adding in the keyword as. It looks like this:

import { exportedResource as newlyNamedResource } from '/path/to/module'
//Let’s see how this could work within main.js

// CORRECT WAY
//a function from 2 files called greet is in both files, so we we rename them as greetEspanol and greetFrancais
import { greet as greetEspanol } from 'greeterEspanol.js';
import { greet as greetFrancais } from 'greeterFrancais.js';
 
greetEspanol(); // Prints: hola
greetFrancais(); // Prints: bonjour

//Now, both of the imported functions can be called within main.js using their new identifiers, greetEspanol() and greetFrancais().