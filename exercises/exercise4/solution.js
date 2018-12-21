'use strict';

// Function 1
const fn1 = ( a, b ) => {
  b++;
  a++;
  return a + b;
};

// Function 2
const fn2 = ( a, b ) => a * b;

// Function 3
const fn3 = a => {
  a = a * a;
  return a + a;
};

// Function 4
const fn4 = () => {
  let a = 10;
  a = a * a;
  return a + a;
};

// Function 5
const fn5 = ( a ) => ( { prop1: a } );

console.log( fn1( 5, 10 ) );
console.log( fn2( 5, 10 ) );
console.log( fn3( 5 ) );
console.log( fn4() );
console.log( fn5( 5 ) );
