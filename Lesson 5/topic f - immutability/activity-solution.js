'use strict';

function immutable( data ) {
  if ( typeof data !== 'object' ) {
    return;
  }
  Object.freeze( data );
  Object.values( data ).forEach( immutable );
}

/* Hints:
- Create a function called immutable that takes in a single argument, data
- If the type of data is not an object then return
-- Use typeof !== ‘object’
-- No need to freeze non objects
- Freeze the data object
- Loop through object values and recursively call the immutable function for each

 */
