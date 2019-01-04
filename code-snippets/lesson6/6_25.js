app.get( '/', ( req, res ) => {
throw new Error( 'OH NO AN ERROR!' );
} );
app.use( ( err, req, res, next ) => {
  req.json( 'Got an error!' + err.message );
} );
