const obj = { firstName: 'Bob', lastName: 'Smith' };
const { firstName: first, lastName } = obj;

console.log( first ); // Expected output: 'Bob'
console.log( lastName ); // Expected output: 'Smith'
