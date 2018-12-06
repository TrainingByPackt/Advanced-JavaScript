app.get( '/synchronousError', ( req, res ) => {
throw new Error( 'Synchronous error' );
} );
app.get( '/asynchronousError', ( req, res, next ) => {
setTimeout( () => next( new Error( 'Asynchronous error' ) ), 0 );
} );
