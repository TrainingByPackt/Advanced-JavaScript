'use strict';

function promiseFunction( data ) {
  return new Promise( ( resolve, reject ) => {
    setTimeout( () => {

      console.log( data );

      if ( typeof data === 'number' ) {
        return reject( new Error( 'Data cannot be of type \'number\'.' ) );
      }

      resolve( 'Success!' );

    }, 10 );
  } );
}

promiseFunction( 1 ).then( console.log ).catch( err => console.log( `Error: ${err.message}` ) );
promiseFunction( 'test' ).then( console.log ).catch( err => console.log( `Error: ${err.message}` ) );
