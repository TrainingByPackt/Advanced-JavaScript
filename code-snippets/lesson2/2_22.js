// Promise function to be wrapped
function promiseFn( args ){
  return new Promise( ( resolve, reject ) => {
    /* do work */
    /* resolve or reject */
  } );
}

// Wrapper function
function wrapper( promiseFn, args,  callback ){
  promiseFn( args ).then( value => callback( null, value )
    .catch( err => callback( err, null );
}
