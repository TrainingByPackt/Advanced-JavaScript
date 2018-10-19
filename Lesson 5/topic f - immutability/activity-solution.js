'use strict';

function immutable( data ) {
  if ( typeof data !== 'object' ) {
    return;
  }
  Object.freeze( data );
  Object.values( data ).forEach( immutable );
}

/* Hints:

 */
