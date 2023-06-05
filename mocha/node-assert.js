
//this is not mocha but it can be used in combination, it's a library of node called assert
// all the methods here https://nodejs.org/api/assert.html


//1//As a Node module, assert can be imported at the top of your files with

const assert = require('assert');



//2// If an argument passed to assert.ok() evaluates to false, an AssertionError is thrown
assert.ok(6 - 1 === 5);
//assert.ok return true and everything is ok, false throw an error


//3//
assert.equal() which does the == comparison for us.

//In the example below, the two methods achieve the same outcome.
assert.ok(landAnimals[2] == waterAnimals[2]);
assert.equal(landAnimals[2], waterAnimals[2]);

//4// strictEqual
assert.equal() //performs a == comparison
assert.strictEqual() //performs a === comparison


//4.1// error
assert.strictEqual([1,2,3],[1,2,3])
//This throws an error because the following is not true: [1,2,3] === [1,2,3]. The values within arrays should be compared with assert.deepEqual().

//4.2// notStrictEqual
const assert = require('assert');

describe('Numbers', () => {
  it('1 does not equal 2', () => {
    // Verify
    assert.notStrictEqual(1,2);
  });
});


//5// deepEqual with objects (or use notDeepEqual for negation)

//Both assertions will throw an error because distinct objects are not considered equal when using either loose or strict equality in JavaScript.
const a = {relation: 'twin', age: '17'};
const b = {relation: 'twin', age: '17'};
assert.equal(a, b);
assert.strictEqual(a, b);
///////

assert.deepEqual() //to compare the values within two objects

assert.deepEqual(a, b); //will not throw an error...


///5.1///   deepEqual with  ARRAY
Arrays are also objects, so deepEqual() also compares their values with loose equality.

const arr1 = [1, 2, 3];
const arr2 = [1, 2, 3];
const arr3 = [1, 2, '3'];
 
assert.deepEqual(arr1, arr2); // No error
assert.deepEqual(arr1, arr3); // No error

///5.2/// Example
const assert = require('assert');

describe('+', () => {
  it('returns the sum of two values', () => {
    // Setup
		let expected = [3, 4, 7];
		let sum = [3, 4];

    // Exercise
		sum.push(3 + 4);

    // Verify
    assert.deepEqual(sum, expected);
  });
});
