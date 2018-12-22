'use strict';

const data = [ { f1: 6, f2: 3 }, { f1: 12, f2: 0 }, { f1: 9, f2: 1 }, { f1: 6, f2: 7 } ];
function swap( key1, key2 ) {
  return obj => {
    [ obj[ key1 ], obj[ key2 ] ] = [ obj[ key2 ], obj[ key1 ] ];
    return obj;
  }
}
console.log( data.map( swap( 'f1', 'f2' ) ) );
