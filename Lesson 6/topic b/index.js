'use strict';

const express = require( 'express' );
const http = require( 'http' );
const bodyParser = require( 'body-parser' );

console.log( 'Starting HTTP server.' );

const app = express();
const server = http.createServer( app );

console.log( 'Configuring HTTP server.' );

// Middleware
app.use( bodyParser.json() );

// Route Handlers
const router = express.Router();
router.route( '/' ).get( ( req, res, next ) => {
  console.log(req.body);

  res.status( 200 ).json( 'nothing to see here' );
} );

router.route( '/' ).post( ( req, res, next ) => {
  console.log(req.body);

  res.status( 200 ).json( 'nothing to see here' );
} );

app.use( '/', router );

const port = 8000;

server.listen( port, err => {
  if ( err ) {
    throw err;
  }

  console.log( `Listening on port ${port}` );
} );