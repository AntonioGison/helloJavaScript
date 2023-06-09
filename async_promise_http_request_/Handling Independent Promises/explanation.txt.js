
//EX 1
//the function waiting() wait first  firstAsyncThing() then it runs secondAsyncThing()

async function waiting() {
 const firstValue = await firstAsyncThing();
 const secondValue = await secondAsyncThing();
 console.log(firstValue, secondValue);
}

//the function concurrent() resolve simultaniously both promises and then load one by one the response
 
async function concurrent() {
 const firstPromise = firstAsyncThing();
 const secondPromise = secondAsyncThing();
console.log(await firstPromise, await secondPromise);
}



// EX 2         PROMISE.ALL()
//Another way to take advantage of concurrency when we have multiple promises which can be executed simultaneously is to await a Promise.all().
//  Promise.all() allows us to take advantage of asynchronicity— each of the four asynchronous tasks can process concurrently.


async function asyncPromAll() {
    const resultArray = await Promise.all([asyncTask1(), asyncTask2(), asyncTask3(), asyncTask4()]);//it wants an array of promises
    for (let i = 0; i<resultArray.length; i++){
      console.log(resultArray[i]); 
    }
  }