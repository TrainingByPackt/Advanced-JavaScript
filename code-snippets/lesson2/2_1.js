function foo( x ) { return 2 * x; }
function bar( y ) { return foo( y + 5 ) - 10; }

console.log( bar( 15 ) ); // Expected output: 30
