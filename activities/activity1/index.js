// Generator exercise

/*
Assignment:
You have been tasked to build a simple app that generates numbers in the Fibonacci sequence upon request. The app generates the next number in the sequence for each request, and resets the sequence it is given an input. Use a generator to generate the Fibonacci sequence. If a value is passed into the generator, reset the sequence.
 */

// Solution

function* fibonacci () {
  let n2 = 0;
  let n1 = 1;

  while ( true ) {
    let input = yield n2;
    if ( input ) {
      n1 = 1;
      n2 = 0;
    } else {
      let next = n1 + n2;
      [ n1, n2 ] = [ next, n1 ];
    }
  }
}

let gen = fibonacci();

console.log( gen.next().value );
console.log( gen.next().value );
console.log( gen.next().value );
console.log( gen.next().value );
console.log( gen.next().value );
console.log( gen.next( true ).value );
console.log( gen.next().value );
console.log( gen.next().value );
console.log( gen.next().value );
console.log( gen.next().value );
console.log( gen.next().value );

/*
Hints
- Create a generator first that contains an infinite loop
- Calculate and yield the next fibonacci number
- Catch yield input with a variable and check truthyness
- If truthy reset the seed values to 1 and 0
- Update the seed values each step of the generator
 */
