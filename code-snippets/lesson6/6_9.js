const fileSystemStream = load( 'filePath' );
fileSystemStream.on( 'data', data => HTTP_Response.push( data ) );
fileSystemStream.on( 'end', HTTP_Response.end() );
