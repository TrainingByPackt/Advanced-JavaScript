'use strict';

const express = require( 'express' );
const http = require( 'http' );
const bodyParser = require( 'body-parser' );
const fs = require( 'fs' );
const notePath = './note.txt';

console.log( 'Starting HTTP server.' );

const app = express();
const server = http.createServer( app );

console.log( 'Configuring HTTP server.' );

// Middleware
app.use( bodyParser.json( { strict: false } ) );

app.use( express.static( __dirname ) );
app.use( express.static( __dirname + '/lib' ) );

// Route Handlers
const router = express.Router();

router.route( '/' ).get( ( req, res ) => res.sendFile( 'index.html', { } ) );

router.route( '/save' ).post( ( req, res ) => {
  fs.writeFile( notePath, req.body, 'utf8', err => {
    if ( err ) {
      res.status( 500 ).json( err );
    }
    res.end();
  } );
} );

router.route( '/load' ).get( ( req, res ) => {
  fs.readFile( notePath, 'utf8', ( err, data ) => {
    if ( err ) {
      res.status( 500 ).json( err );
    }
    res.json( data );
  } );
} );

app.use( '/', router );

const port = 8000;

server.listen( port, err => {
  if ( err ) {
    throw err;
  }

  console.log( `Listening on port ${port}` );
} );
