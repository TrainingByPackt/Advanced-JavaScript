app.get( '/abc?de', ( req, res ) => {
console.log( 'Matched /abde or /abcde' );
} );