'use strict';

/* Assignment:

Your team is building an API that is based around callbacks. To prevent runtime errors, you need to validate that the callback argument passed into the callback API funcatiobs are valid callable functions. Create a function for your API. In the body of that function, validate that the callback argument is a function. If it is not a function, throw an error. After a delay, log the data passed into the API function and call the callback.

 */

// Solution:

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

/* Expected output

Got error: Invalid callback. Please provide a function.
1
Callback Called!

 */
// Note: student solutions may vary slightly depending on their input
