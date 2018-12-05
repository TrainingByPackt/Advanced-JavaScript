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

// Test code. If there are errors then the immutable function does not work as intended
const obj = { a: 10, b: 15, obj: { c: 20 }, arr: [ 1, 5, 10, { test: 'value' } ] };

const arr = [ 1, 5, [ 5, 6 ], { obj: true } ];

immutable( obj );
test_try_catch('add property at main object', ()=>{obj.test='test'} );
test_try_catch('add property at nested object', ()=>{obj.obj.test='test'} );
test_try_catch('add property at nested array', ()=>{obj.arr.push('test')} );
test_try_catch('add property at nested array object element', ()=>{obj.arr[3].test='test'} );

immutable( arr );
test_try_catch('add element', ()=>{arr.push('test')} );
test_try_catch('add element at nested array', ()=>{arr[2].push('test')} );
test_try_catch('edit at nested object', ()=>{arr[3].test='test'} );

console.log('Passed Tests!');

function test_try_catch( test, _protected ) {
  let success = true;
  try {_protected();}
  catch ( e ) {success = false;}
  if ( success ) {
    throw new Error( `Failed test: ${test}` );
  }
}

/* Hints:
- Create a function called immutable that takes in a single argument, data
- If the type of data is not an object then return
-- Use typeof !== 'object'
-- No need to freeze non objects
- Freeze the data object
- Loop through object values and recursively call the immutable function for each

 */
