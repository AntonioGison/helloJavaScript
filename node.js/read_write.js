const readline = require('readline');
const fs = require('fs');

const fileStream = fs.createWriteStream('shoppingResults.txt');

const myInterface = readline.createInterface({
  input: fs.createReadStream('shoppingList.txt')
});


function transformData (line){
fileStream.write(`They were out of: ${line}\n`);
fileStream.end();
}

myInterface.on('line',transformData);
//"Whenever a new line of input is read from the readable stream, execute the transformData function."
