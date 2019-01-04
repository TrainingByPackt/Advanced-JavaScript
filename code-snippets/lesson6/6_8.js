const fs = require( 'fs' );
const writeable = fs.createWriteStream( './path/to/files.ext' );
writeable.write( 'some data' );
writeable.write( 'more data!' );
