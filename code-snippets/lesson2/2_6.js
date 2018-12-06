TwitterAPI.listFollowers( { user_id: 'example_user' }, (err, result) => {
  const [ id1, id2, id3 ] = [ result[ 0 ].id, result[ 1 ].id, result[ 2 ].id ];
  TwitterAPI.unfollow( { user_id: id1 }, ( err, result ) => {
    TwitterAPI.block( { user_id: id1 }, ( err, result ) => {
      TwitterAPI.unfollow( { user_id: id2 }, ( err, result ) => {
        TwitterAPI.block( { user_id: id2 }, ( err, result ) => {
          TwitterAPI.unfollow( { user_id: id3 }, ( err, result ) => {
            TwitterAPI.block( { user_id: id3 }, ( err, result ) => {
              console.log( 'Unfollowed and blocked 3 users!' );
            });
          });
        });
      });
    });
  });
});