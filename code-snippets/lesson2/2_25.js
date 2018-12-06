async function awaitExample( /* arguments */ ){
  let promise = new Promise( ( resolve, reject ) => {
    setTimeout( () => resolve( 'done!'), 100 );
  });
  const result = await promise;
  console.log( result ); // Expected output: done!
}
awaitExample( /* arguments */ );
