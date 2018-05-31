// Array destructuring assignment

/*
Assignment:
Write code that destructures an array into 2 variables, skips 2 variables,
and then saves the remaining elements with the rest operator as an array into
a 3rd variable. Log the contents of each variable at the end of the program.
 */

// Solution

const testArray = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ];

const [ var1, var2, , , ...var3 ] = testArray;

console.log( var1 );
console.log( var2 );
console.log( var3 );
/* Hints
- Destructure with syntax discussed in lesson
- Skip values with holes in the variables array
- Capture the remaining values with the rest/spread operator
 */