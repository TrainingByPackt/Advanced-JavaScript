'use strict';

function fakeRounding( arg1 ) {
  const decimal = Math.abs(arg1) % 1;
  if ( decimal <= 0.5 ) {
    return Math.ceil( arg1 );
  }
  return Math.floor( arg1 );
}

function test( value, expected ) {
  if ( value !== expected ) {
    throw new Error( `Value computed (${value}) did not match expected value (${expected})` );
  } else {
    console.log( 'Test passed.' );
  }
}

test( fakeRounding( 0 ), 0 );
test( fakeRounding( 0.4999 ), 1 );
test( fakeRounding( 0.5 ), 1 );
test( fakeRounding( 0.5001 ), 0 );
test( fakeRounding( -0.4999 ), 0 );
test( fakeRounding( -0.5 ), 0 );
test( fakeRounding( -0.5001 ), -1 );
