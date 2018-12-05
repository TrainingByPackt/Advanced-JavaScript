const obj = { firstName: 'Bob', lastName: 'Smith' };
const { firstName = 'Samantha', middleName = 'Chris' } = obj;

console.log( firstName ); // Expected output: 'Bob'
console.log( middleName ); // Expected output: 'Chris'
