'use strict';

/* Assignment:

Write a higher order function that takes in a data argument and a callback. In the higher
order function, validate the callback, log the data argument then call the callback after
an asynchronous delay. First call the higher order function with an arbitrary data value
and a nonexistent callback function. Then call the higher order function with an arbitrary
data value and a callback function that logs to the console when called. Catch and log any
errors for each call of the function.

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

/* Hints:
- Validate the callback with the code example given in the slides or text book
-
 */