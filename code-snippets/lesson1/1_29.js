let names = [ 'John', 'Michael', 'Jessica', 'Susan' ];
let [ name1,, name3 ] = names; // Note the missing variable name for the second array item
let [ ,,, ] = names; // Ignores all items in the array

console.log( name1 ); // Expected output: 'John'
console.log( name3 ); // Expected output: 'Jessica'
