const stringOfNames = 'Dominic, Shelly, Luka, Devin';

let arrayOfNames = stringOfNames.split();

console.log("No separator; entire string is lone element:\n", arrayOfNames, "\n");

arrayOfNames = stringOfNames.split(`, `);

// Iterate through arrayOfNames and .split() each name string into separate characters.
for(let i = 0; i < arrayOfNames.length; i++) {
  console.log(arrayOfNames[i].split(""));
};

/**
 *          OUTPUT
 * 
 No separator; entire string is lone element:
 [ 'Dominic, Shelly, Luka, Devin' ] 
['D', 'o', 'm','i', 'n', 'i','c']
[ 'S', 'h', 'e', 'l', 'l', 'y' ]
[ 'L', 'u', 'k', 'a' ]
[ 'D', 'e', 'v', 'i', 'n' ] */