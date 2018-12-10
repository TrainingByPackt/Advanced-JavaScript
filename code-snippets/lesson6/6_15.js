app.get( '/', ( req, res ) => res.end('GET request at /') );
app.post( '/user', ( req, res ) => res.end( 'POST request at /user') );
app.delete( '/cart/item', ( req, res ) => res.end('DELETE request at /cart/item') );
