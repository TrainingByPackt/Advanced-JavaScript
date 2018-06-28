'use strict';

/* Assignment:

Write a function that takes in a data argument and returns a promise. In the promise, log
the data argument. The promise should reject with an error if the data argument is a number,
otherwise it should resolve. First call the function with a numerical value and then a non
numerical value. Log the rejection error or promise resolution.

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

/* Hits:

- create a function that takes in an argument and returns a promise
- the promise should start a timeout
- inside the timeout log data
- check te type of data, error if it is a number
- resolve otherwise
- call the function with the arguments 1 and test
- the function returns a promise, attach the then and catch handlers to the function output
- if your code is logging an extra line or 2 that says 'undefined', double check the promise handler functions
- should only have one then each and the then should come before the catch
 */