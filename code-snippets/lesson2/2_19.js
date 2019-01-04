// Create promises
let promise1 = new Promise( ( resolve, reject ) => setTimeout( () => resolve( 10 ), 100 ) );
let promise2 = new Promise( ( resolve, reject ) => setTimeout( () => resolve( 20 ), 200 ) );
let promise3 = new Promise( ( resolve, reject ) => setTimeout( () => resolve( 30 ), 10 ) );
Promise.all( [ promise1, promise2, promise3 ] ).then( results => console.log( results ) );
//Expected output: [ 10, 20, 30 ]
