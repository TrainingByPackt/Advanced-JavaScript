const express = require( 'express' );
const hostname = '127.0.0.1';
const port = 8000;
const app = express();
app.get( '/', ( req, res ) => res.end( 'Working express server!' ) );
app.listen( port, hostname, () => console.log( `Server running at http://${hostname}:${port}/` ) );
