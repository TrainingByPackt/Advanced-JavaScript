// Create promises
let promise1 = new Promise( ( resolve, reject ) => setTimeout( resolve( 10 ), 100 ) );
let promise2 = new Promise( ( resolve, reject ) => setTimeout( resolve( 20 ), 200 ) );
let promise3 = new Promise( ( resolve, reject ) => setTimeout( resolve( 30 ), 10 ) );

Promise.race( [ promise1, promise2, promise3 ] ).then( result => console.log( result ) );

//Expected output: 30
