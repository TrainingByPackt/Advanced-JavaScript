const obj = { firstName: 'Bob', lastName: 'Smith' };
let firstName, lastName;

( { firstName: first, lastName } = obj ); // Note parentheses around expression

console.log( firstName ); // Expected output: 'Bob'
console.log( lastName ); // Expected output: 'Smith'
