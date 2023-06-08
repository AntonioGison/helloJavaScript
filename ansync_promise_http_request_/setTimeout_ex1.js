//In the example code, we invoked returnPromiseFunction() which returned a promise. We assigned that promise to the variable prom. 
//Similar to the asynchronous promises you may encounter in production, prom will initially have a status of pending.

const returnPromiseFunction = () => {
    return new Promise((resolve, reject) => {
      setTimeout(( ) => {resolve('I resolved!')}, 1000);
    });
  };
   
  const prom = returnPromiseFunction();



  //EXAMPLE 2
  