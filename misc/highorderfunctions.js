//HIGHER-ORDER FUNCTIONS

const announceThatIAmDoingImportantWork = () => {
    console.log("I’m doing very important work!");
};

//With callback functions, we pass in the function itself by typing the function name without the parentheses:
const busy = announceThatIAmDoingImportantWork;
 
busy(); // we can assign functions to variables and execute them

console.log(busy.name); //  you can use the dot operator to access a function’s property: functionName.name

/********/

//We call functions that get passed in as parameters callback functions

const addTwo = num => {
    return num + 2;
  }
  
  const checkConsistentOutput = (func, val) => {
    let checkA = val + 2;
    let checkB = func(val);

    if (checkA === checkB){
        return func(val); // If true, return the result of the callback function
    }
    else{
        return 'inconsistent results'
    };
    //return checkA === checkB ? func(val) : 'inconsistent results';  
  }
  
  console.log(checkConsistentOutput(addTwo, 10));
  