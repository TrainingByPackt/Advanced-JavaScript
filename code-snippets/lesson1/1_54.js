// Using an iterator
let it = createIterator( [ 'Hello', 'World' ] );
console.log( it.next() ); // Expected output: { value: 'Hello', done: false }
console.log( it.next() ); // Expected output: { value: 'World' , done: false }
console.log( it.next() ); // Expected output: { value: undefined, done: true }
