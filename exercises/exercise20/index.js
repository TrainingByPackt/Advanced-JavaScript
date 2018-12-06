'use strict';

/* Assignment:

You are building a promise based API. In your API, you must validate user input to ensure data passed into your database models is of the right type. Write a function that returns a promise. This promise should validate that the data value passed into the API function is not a number. If the user passes a number into the function, reject the promise with an error. If the user passes a non number into the API function, resolve the promise with the word 'Success!'


 */

// Solution:

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

/* Expected output;

1
Error: Data cannot be of type 'number'.
test
Success!
*/