TwitterAPI.listFollowers( { user_id: 'example_user' }, (err, result) => {
  if ( err ) { throw err; }
  TwitterAPI.unfollow( { user_id: result[ 0 ].id }, ( err, result ) => {
    if ( err ) { throw err; }
    console.log( 'Unfollowed someone!' );
  } );
} );
