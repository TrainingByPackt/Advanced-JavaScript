// Enhanced object properties example

/*
  Assignment:
  You are building a simple JavaScript math package to publish to Node Package Manager (NPM). Your module will export an object that contains several constants and functions. Using ES6 syntax, create the export object with the following functions and values: the value of pi, the ratio to convert inches to feet, a function that sums two arguments, and a function that subtracts two arguments. Log the object after it has been created.
 */

const PI = 3.1415;
const INCHES_TO_FEET = 0.083333;
function sum( n1, n2 ) {
  return n1 + n2;
}
function subtract( n1, n2 ) {
  return n1 - n2;
}

// Solution
const exportObject = {
  PI,
  INCHES_TO_FEET,
  sum( n1, n2 ) {
    return n1 + n2;
  },
  subtract( n1, n2 ) {
    return n1 - n2;
  }
};
console.log( exportObject );

/*
Hints
- Use property notation for arg1
- Use function notation for arg2
- Use computed property notation for the concatination of arg3 and arg4 (arg3+arg4)
 */

