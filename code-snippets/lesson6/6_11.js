fs.existsSync( '/some/path/to/file.txt' );
fs.existsSync( Buffer.from( '/some/path/to/file.txt' ) );
fs.existsSync( new URL( 'file://some/path/to/file.txt' ) );