app.get( '/', ( req, res, next ) => next() );
app.get( '/', ( req, res ) => res.end( 'Second handler!' ) );
