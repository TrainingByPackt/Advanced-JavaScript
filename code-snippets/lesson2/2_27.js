async function tryCatchExample() {
  // Try to do asynchronous work
  try{
    const value1 = await Promise.resolve( 'Success 1' );
    const value2 = await Promise.resolve( 'Success 2' );
    const value3 = await Promise.reject( 'Oh no!' );
  }

    // Catch errors
  catch( err ){
    console.log( err ); // Expected output: Oh no!
  }
}

tryCatchExample()
