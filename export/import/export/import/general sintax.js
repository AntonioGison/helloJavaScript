
//we separate the script in different files for separation of concern
/**
the functions you wish to reuse can be exported using the named export syntax below:
 */

export { resourceToExportA, resourceToExportB, ...}

//The ES6 syntax for importing named resources from modules is similar to the export syntax:

import { exportedResourceA, exportedResourceB } from '/path/to/module.js';



///////// EXAMPLE 1 //////////

/* main.js */

// import the functions here
import { changeText, changeToFunkyColor  } from './module.js';

const header = document.getElementById("header");

// call changeText here
 changeText(header,"I did it!");
setInterval(()=> {
  
  // call changeToFunkyColor() here
changeToFunkyColor(header);
}, 200);

///IMPORTANT//

//Every script that uses modules must have a type="module" attribute, like so:

<script type="module" src="myModule.js"></script>

