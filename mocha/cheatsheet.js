//Test frameworks are used to organize and automate tests that provide useful feedback when errors occur.

//to run the test in mocha
npm test

// ==> https://mochajs.org/#getting-started DOCUMENTATION TO INSTALL IT! <==

// execute before
before(() => {
    path = './message.txt';
  });

//execute all the IT before
beforeEach(() => {
    testCounter++;
  });

//execute after
after(() => {
    console.log("number of tests: " + testCounter);
  });

//execute after all
afterEach(() => {
    path = './message.txt';
  });

/////////////////////////////////////

/*In Mocha, the describe() function is used to group tests.
It accepts a string to describe the group of tests and a callback function which contains it() tests. */

describe('group of tests', () => {
    //Write it functions here
    
  });

// the it() function is used to execute individual tests. It accepts a string to describe the test and a callback function to execute assertions.

describe('+', () => {
    it('returns the sum of its arguments', () => {
      // Write assertions here
        assert.ok(3 + 4 === 7)
    });
  });

//The assert.ok() function is be used to evaluate a boolean expression within a test. If the expression evaluates to false, an AssertionError is thrown.
assert.ok(3 + 4 === 7)

  
