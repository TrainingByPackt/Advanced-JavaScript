function fn( num1, num2, ...args ) {
  // Destructures an indefinite number of function parameters into the array args, excluding the first two arguments passed in.
  console.log( num1 );
  console.log( num2 );
  console.log( args );
}

fn( 1, 2, 3, 4, 5, 6 );
// Expected output
// 1
// 2
// [ 3, 4, 5, 6 ]
