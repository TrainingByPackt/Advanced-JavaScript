TwitterAPI.listFollowers( { user_id: 'example_user' }, (err, result) => {
  if ( err ) {
    // HANDLE ERROR
  }
  console.log( err, result );
} );
