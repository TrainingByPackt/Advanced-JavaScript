const varName = 'first';
function computeNameType( type ) {
  return type + 'Name';
}

const person = {
  [ varName + 'Name' ]: 'John',
[ computeNameType( 'last' ) ]: 'Smith'
};

console.log( person.firstName ); // Expected output: John
console.log( person.lastName ); // Expected output: Smith
