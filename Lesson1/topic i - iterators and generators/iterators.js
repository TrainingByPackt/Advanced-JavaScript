// Template literal activity

/*
 Assignment:
 Create an iterator that takes in an array and iterates over the even indexes, then once it
 has reached the end of the array, iterates over the odd indexes. Once all odd indexes have
 been iterated over, stop iteration.
*/

// Solution
function evenOddIterator( array ) {
  let idx = 0;
  return {
    next() {

      if ( idx < array.length ) {
        return nextValue();
      }

      if ( ( idx % 2 ) === 0 ) {
        idx = 1;
        return nextValue();
      }

      return { done: true };

      function nextValue() {
        const returnValue = array[ idx ];
        idx += 2;
        return { value: returnValue, done: false };
      }

    }
  }
}

const testArray = [ 7, 10, 5, 5, 9, 2, 9, 5, 2, 1 ];
let it = evenOddIterator( testArray );
while ( true ) {
  const iterated = it.next();
  if ( iterated.done ) {
    break;
  }
  console.log( iterated.value );
}

// Tips
/*
 - create a iterator that first loops through all the values in order
 - expand the iterator to only iterate over even values
 - expand the iterator to reset the index to 1 when it reaches the end and if the current index is even
 - Can check if current index is eve with a modulus call ( idx % 2 ) === 0 will be truthy if index is even
 */
