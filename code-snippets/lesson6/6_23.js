app.use( ( req, res, next ) => {
  req.currentTime = new Date();
  next();
} );
app.get( '/', ( req, res ) => {
console.log( req.currentTime );
} );
