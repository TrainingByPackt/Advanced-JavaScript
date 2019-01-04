app.get( '/b(es)?t', ( req, res ) => {
console.log( 'Matched /bt and /best' );
} );
app.get( '/b(es)+t', ( req, res ) => {
console.log( 'Matched /best, /besest, /besesest' );
} );
app.get( '/b(es)*t', ( req, res ) => {
console.log( 'Matched /bt, /best, /besest, /besesest' );
} );
