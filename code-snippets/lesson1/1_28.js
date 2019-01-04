let names = [ 'John', 'Michael' ];
let [ name1 ] = names
let [ name2, name3, name4 ] = names;

console.log( name1 ); // Expected output: 'John'
console.log( name2 ); // Expected output: 'John'
console.log( name3 ); // Expected output: 'Michael'
console.log( name4 ); // Expected output: undefined
