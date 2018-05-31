// Array destructuring assignment

/*
Assignment:
Write code that destructures an object into 2 variables,
and then saves the remaining properties with the rest operator as an array into
a 3rd variable. Log the contents of each variable at the end of the program.
 */

// Solution

const testObject = { prop1: 'prop1', prop2: 'prop2', prop3: 'prop3', prop4: 'prop4' };
let prop1, prop2, var3;

({ prop1, prop2, ...var3 } = testObject);

console.log( prop1 );
console.log( prop2 );
console.log( var3 );

/* Hints
- Destructure with syntax discussed in
- Capture the remaining properties with the rest/spread operator
 */