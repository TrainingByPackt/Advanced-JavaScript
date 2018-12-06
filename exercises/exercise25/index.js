'use strict';
// TDD exercise

/*
Scenario:
You have been tasked to write a Fibonacci number generator. Use the Test Driven Development cycle to write tests and develop the Fibonacci algorithm. You can use the Fibonacci  code written in Lesson 1, Activity I for reference (it may or may not need to be modified). You should write tests for the n=0 condition, then implement the n=0 condition, then write for tests and implement the n=1 condition, then the write tests for and implement the n=2 condition, and finally the n=5, n=7, and n=9 conditions. If the test passes, log 'Test passed.' Otherwise throw an error.
 */

// Solution

function fibonacci( i ) {
  if ( i <= 0 ) {
    return 1;
  } else if ( i === 1 ) {
    return 1;
  } else {
    return fibonacci( i - 1 ) + fibonacci( i - 2 );
  }
}

function test( value, expected ) {
  if ( value !== expected ) {
    throw new Error( 'Value did not match expected value' );
  } else {
    console.log( 'Test passed.' );
  }
}

test( fibonacci( 0 ), 1 );
test( fibonacci( 1 ), 1 );
test( fibonacci( 2 ), 2 );
test( fibonacci( 5 ), 8 );
test( fibonacci( 7 ), 21 );
test( fibonacci( 9 ), 55 );
