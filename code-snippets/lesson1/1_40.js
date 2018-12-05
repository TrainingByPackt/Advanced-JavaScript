const obj = { firstName: 'Bob', lastName: 'Smith' };
const { firstName: first = 'Samantha', middleName: middle = 'Chris' } = obj;

console.log( first ); // Expected output: 'Bob'
console.log( middle); // Expected output: 'Chris'
