// Generator exercise

/*
Assignment:
Create a generator that produces the fibonacci sequence (xn=xn-1+xn-2). If a truthy value
is passed into the generator via next, then restart the sequence from seed n1=1 n0=0. If
the value is over 10 then end generation. Start the sequence with the first two numbers
(1 and 0) already saved in state.

 */

function *fibonacci() {
  let n2 = 0;
  let n1 = 1;

  while ( true ) {
    let next = n1 + n2;

    let input = yield next;
    if ( input ) {
      n1 = 1;
      n2 = 0;
    } else {
      [ n1, n2 ] = [ next, n1 ];
    }
  }
}

let gen = fibonacci();

console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next(true).value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
