function fn( n1, n2, n3 ) {
  console.log( n1, n2, n3 );
}

const values = [ 1, 2, 3 ];
fn( ...values ); // Expected output: 1, 2, 3
