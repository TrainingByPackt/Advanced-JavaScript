'use strict';

const person = { age: 10, firstName: 'Sandra', lastName: 'Jeffereys' };

function getOlder() {
  person.age++;
}

function formatName() {
  person.name = `Mrs. ${person.firstName} ${person.lastName}`;
}

console.log( person );
getOlder();
formatName();
console.log( person );
