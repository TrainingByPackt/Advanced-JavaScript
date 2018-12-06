// Reject the promise with a value
const myPromise = new Promise( ( resolve, reject ) => {
  // Do asynchronous work here
  reject( new Error ( 'Promise was rejected!' ) );
} );

myPromse.then( () => {}, error => console.log( error) );
// Expected output: Error: Promise was rejected!
// ** output stack trace omitted
