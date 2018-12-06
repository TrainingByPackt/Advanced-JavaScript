const fs = require( 'fs' );
fs.createReadStream( './path/to/files.ext' ).on( 'data', data => {
console.log( data );
} );
