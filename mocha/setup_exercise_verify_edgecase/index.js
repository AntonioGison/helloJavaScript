const Calculate = {
    factorial(input){
      let fact=1;
    //we return 1 in case of 0 or 1, it's also an edge case
    //edge case = an unique case that requires tailor logic to serve that and only that specific occasion
      if (input === 0){
      return 1;
      }
      for(let i=1; i<=input;i++){
           fact = fact * i;
           console.log(fact);
      }
      return fact;
    }
  }
  
  Calculate.factorial(3);
  
  module.exports = Calculate;
  
  
  