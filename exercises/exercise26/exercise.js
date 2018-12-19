'use strict';

function reverseRounding( arg1 ) {
  const decimal = arg1 % 1;
  if ( decimal >= 0.5 ) {
    return Math.ceil( arg1 );
  }
  return Math.floor( arg1 );
}

// Write solution here...
