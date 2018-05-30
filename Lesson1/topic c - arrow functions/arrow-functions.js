// Arrow functions exercises

// Assignment: convert the following functions to arrow functions in the simplest form.
// Function bodies do not need to be simplified. Just declaration method.

let fn1;
let fn2;
let fn3;
let fn4;
let fn5;

// Function 1
fn1 = function ( a, b ) {
  b++;
  a++;
  return a + b;
};

// Function 2
fn2 = function ( a, b ) {
  return a * b;
};

// Function 3
fn3 = function ( a ) {
  a = a * a;
  return a + a;
};

// Function 4
fn4 = function () {
  let a = 10;
  a = a * a;
  return a + a;
};

// Function 5
fn5 = function ( a ) {
  return { prop1: a };
};

console.log( fn1( 5, 10 ) );
console.log( fn2( 5, 10 ) );
console.log( fn3( 5 ) );
console.log( fn4() );
console.log( fn5( 5 ) );

// Solutions

// Function 1
fn1 = ( a, b ) => {
  b++;
  a++;
  return a + b;
};

// Function 2
fn2 = ( a, b ) => a * b;

// Function 3
fn3 = a => {
  a = a * a;
  return a + a;
};

// Function 4
fn4 = () => {
  let a = 10;
  a = a * a;
  return a + a;
};

// Function 5
fn5 = ( a ) => ( { prop1: a } );

console.log( fn1( 5, 10 ) );
console.log( fn2( 5, 10 ) );
console.log( fn3( 5 ) );
console.log( fn4() );
console.log( fn5( 5 ) );

// Hints
// - to convert to arrow functions remove the function keyword and add the fat arrow ( => )
// - single argument input should not have parentheses around function arguments
// - single line functions will return the expression on the single line and do not need {}
// - to return an object literal on a single line, it must be surrounded with parentheses