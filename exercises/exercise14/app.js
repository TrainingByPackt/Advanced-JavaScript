/*
Scenario:
Your team has written your website code in ES6 but some devices users are using do not support ES6 so you must either rewrite your entire code base in ES5 or use a transpiler to convert it to ES5. Take the ES6 code written in Activity C and transpile it into ES5 with Bable. Run the original and transpiled code and compare the output.
 */

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