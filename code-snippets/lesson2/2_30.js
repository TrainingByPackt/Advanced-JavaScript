async function awaitPromiseAll(){
  let promise1 = new Promise( ( resolve, reject ) => setTimeout( () => resolve( 10 ), 100 ) );
  let promise2 = new Promise( ( resolve, reject ) => setTimeout( () => resolve( 20 ), 200 ) );
  let promise3 = new Promise( ( resolve, reject ) => setTimeout( () => resolve( 30 ), 10 ) );
  const result = await Promise.all( [ promise1, promise2, promise3 ] );
  console.log( result ); //Expected output: [ 10, 20, 30 ]
}
awaitPromiseAll();
