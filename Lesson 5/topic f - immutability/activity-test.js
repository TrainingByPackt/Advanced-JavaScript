'use strict';

// Write your function called immutable here
function immutable() {}

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