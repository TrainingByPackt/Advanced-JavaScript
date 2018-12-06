async function example1( ){ return 'Hello'; }
async function example2( ){ return Promise.resolve( 'World' ); }
example1().then( console.log ); // Expected output: Hello
example2().then( console.log ); // Expected output: World
