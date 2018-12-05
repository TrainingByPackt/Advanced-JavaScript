function fn( ...[ n1, n2, n3 ] ) {
  // Destructures an indefinite number of function parameters into the array args, which is destructured into 3 variables
  console.log( n1, n2, n3 );
}

fn( 1, 2 ); // Expected output: 1, 2, undefined
