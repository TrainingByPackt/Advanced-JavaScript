'use strict';

// Activity F
// Scenario: Your research team has obtained a list of value from your latest experiment however due to a calibration error only some of the data can be used and any data that can be used needs to be scaled. You must to build a utility function that takes in an array, filters out any values less than or equal to 0, scales the remaining values by multiplying them by 2, and returns the final results. First build an imperative function to do this, then build a declarative function to do the same thing.

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
