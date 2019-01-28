'use strict';

function fibonacci( i ) {
  if ( i <= 0 ) {
    return 0;
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

test( fibonacci( 0 ), 0 );
test( fibonacci( 1 ), 1 );
test( fibonacci( 2 ), 1 );
test( fibonacci( 5 ), 5 );
test( fibonacci( 7 ), 13 );
test( fibonacci( 9 ), 34 );
