const obj = { firstName: 'Bob', middleName: 'Chris', lastName: 'Smith' };
const { firstName, ...otherNames } = obj;

console.log( firstName ); // Expected output: 'Bob'
console.log( otherNames ); // Expected output: { middleName: 'Chris', lastName: 'Smith' }
