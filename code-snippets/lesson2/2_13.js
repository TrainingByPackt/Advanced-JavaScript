// Resolve the promise with a value
const myPromise = new Promise( ( resolve, reject ) => {
  // Do asynchronous work here
  resolve( 'Promise was resolved!' );
} );

myPromse.then( value => console.log( value ) );
// Expected output: 'Promise was resolved'
