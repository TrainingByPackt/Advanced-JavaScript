'use strict';

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
