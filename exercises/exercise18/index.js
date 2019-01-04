'use strict';

function higherOrder( data, cb ) {
  if ( !cb || !( typeof cb === 'function' ) ) {
    throw new Error( 'Invalid callback. Please provide a function.' );
  }

  console.log( data );

  setTimeout( cb, 10 );

}

try {
  higherOrder( 1, null );
} catch ( err ) {
  console.log( `Got error: ${err.message}` );
}

higherOrder( 1, () => {
  console.log( 'Callback Called!' )
} );
