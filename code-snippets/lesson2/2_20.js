// Create promises
let promise1 = new Promise( ( resolve, reject ) => {
  setTimeout( () => { reject( 'Error 1' ); }, 100 );
} );
let promise2 = new Promise( ( resolve, reject ) => {
  setTimeout( () => { reject( 'Error 2' ); }, 200 );
} );
let promise3 = new Promise( ( resolve, reject ) => {
  setTimeout( () => { reject( 'Error 3' ); }, 10 );
} );
Promise.all( [ promise1, promise2, promise3 ] ).then( console.log ).catch( console.log );
// Expected output:
// Error: Error 3
