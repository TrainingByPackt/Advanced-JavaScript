'use strict';

/*
  Activity: You have been tasked to build a NodeJS express server for a note taking application. The server should serve a basic HTML page (provided in the activity folder under index.html) to the base route ('/'). The server will need to have an API route to load a saved note from a text file in the server's local file system and an API route to save changes to the note to the text file on the server's local file system. The server should accept a GET request to the URI '/load' when loading the note, and accept a POST request to the URI '/save' when saving the note. The provided HTML file will assume that these are the API paths used on the server. When building the server, you may want to use the body-parser middleware with the option strict set to false to simplify the handling of request.
 */

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

// Route Handlers
const router = express.Router();

router.route( '/' ).get( ( req, res ) => res.sendFile( 'index.html', { root: __dirname } ) );

router.route( '/save' ).post( ( req, res ) => {
  fs.writeFile( notePath, req.body, 'utf8', err => {
    if ( err ) {
      res.status( 500 ).json(err);
    }
    res.end();
  } );
} );

router.route( '/load' ).get( ( req, res ) => {
  fs.readFile( notePath, 'utf8', ( err, data ) => {
    if ( err ) {
      res.status( 500 ).json(err);
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