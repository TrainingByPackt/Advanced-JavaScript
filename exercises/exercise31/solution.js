'use strict';

const person = { age: 10, firstName: 'Sandra', lastName: 'Jeffereys' };

function getOlder( age ) {
  return ++age;
}

function formatName( first, last ) {
  return `Mrs. ${first} ${last}`;
}

console.log( person );
person.age = getOlder( person.age );
person.name = formatName( person.firstName, person.lastName );
console.log( person );
