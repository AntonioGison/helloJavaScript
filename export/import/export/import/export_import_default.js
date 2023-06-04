//The syntax for exporting a default object looks like this:

const resources = { 
  valueA, 
  valueB 
}
export { resources as default };

//shorthand way

const resources = {
  valueA,
  valueB
}
export default resources;

//alternative (NOT DEFAULT) Or you can put the keyword export in front of the value you want to export:

export const foo = () => {};

// Named import syntax: (not default)
import { valueA, valueB, valueC } from 'path/to/module.js';
 
// Default import syntax:
import moduleResources from '/path/to/module.js';

//NOTE: if you don't specify the path correctly it will break the code