function listHandler( err, result ) {
  TwitterAPI.unfollow( { user_id: result[ 0 ].id }, unfollowHandler );
}

function unfollowHandler( err, result) {
  TwitterAPI.block( { user_id: result.id }, blockHandler );
}

function blockHandler( err, result ) {
  console.log( 'User unfollowed and blocked!' );
}

TwitterAPI.listFollowers( { user_id: 'example_user' }, listHandler);
