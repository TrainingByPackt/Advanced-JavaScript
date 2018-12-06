function apiFunction( args, callback ){
  if ( !callback || !( typeof callback === 'function' ) ){
    throw new Error( 'Invalid callback. Provide a function.' );
  }
  let result = {};
  let err = null;
  // Do work
  // Set err and result
  cb( err, result );
}
