// Reject promise with an error
const myPromise = new Promise( ( resolve, reject ) => {
  // Do asynchronous work here
  reject( new Error( 'Oh no! Promise was rejected' ) );
} );
