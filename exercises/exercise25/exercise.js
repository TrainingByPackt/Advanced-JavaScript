'use strict';

function fakeRounding( arg1 ) {
  const decimal = Math.abs(arg1) % 1;
  if ( decimal <= 0.5 ) {
    return Math.ceil( arg1 );
  }
  return Math.floor( arg1 );
}

// Write solution here...
