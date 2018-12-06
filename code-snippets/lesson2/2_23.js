// Callback function to be wrapped
function wrappedFn( args, cb ){
  /* do work */
  /* call cb with error or result */
}

// Wrapper function
function wrapper( wrappedFn, args ){
  return new Promise( ( resolve, reject ) => {
    wrappedFn( args, ( err, result ) => {
      if( err ) {
        return reject( err );
      }
      resolve( result );
    } );
  } );
}
