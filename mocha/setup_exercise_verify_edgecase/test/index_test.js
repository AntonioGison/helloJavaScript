var assert = require("assert");
var Calculate =  require('../index.js')

describe('Calculate', () => {
  describe('.factorial', () => {
    
    it('returns 120 when given 5', () => { 
      //setup
      const inputNumber = 5;
      const expectedOutput = 120;
      const actual = Calculate.factorial(inputNumber);

      assert.equal(expectedOutput, actual);

     });


    it('return the factorial of an input number',()=>{
      //setup
      const expected = 6;
      const inputNumber = Calculate.factorial(3);
      //verify        
      assert.equal(inputNumber,expected);
    })

    //EDGE Case
    it('returns the 1 when given 0',()=>{
      //setup
      const expected = 1;
      const inputNumber = Calculate.factorial(0);
      //verify        
      assert.equal(inputNumber,expected);
    })
  });
});