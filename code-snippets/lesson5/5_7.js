function multiplyBy2( c ) {
  return 2 * c;
}

function sumNumbers( a, b ) {
  return a + b;
}

const v1 = sumNumbers( 2, 4 ); // 2 + 4 = 6
const v2 = multiplyBy2( v2 ); // 2 * 6 = 12
const v3 = multiplyBy2( sumNumbers( 2, 4 ) ); // 2 * ( 2 + 4 ) = 12
