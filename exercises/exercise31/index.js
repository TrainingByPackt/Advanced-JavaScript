'use strict';

// Activity B:
// Your research team has obtained a list of value from your latest experiment however due to a calibration error only some of the data can be used and any data that can be used needs to be scaled. You must to build a utility function that takes in an array, filters out any values less than or equal to 0, scales the remaining values by multiplying them by 2, and returns the final results. First build an imperative function to do this, then build a declarative function to do the same thing.

function imperative( arr ) {
  const filtered = [];
  for ( let i = 0; i < arr.length; i++ ) {
    if ( arr[ i ] > 0 ) {
      filtered.push( arr[ i ] );
    }
  }
  for ( let j = 0; j < filtered.length; j++ ) {
    filtered[ j ] = 2 * filtered[ j ];
  }
  return filtered;
}

function declarative( arr ) {
  return arr.filter( v => v > 0 ).map( v => 2 * v );
}

//Test values
const values = [ -5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5 ];
console.log( imperative( values ) ); // Output: [ 2, 4, 6, 8, 10 ]
console.log( declarative( values ) ); // Output: [ 2, 4, 6, 8, 10 ]
