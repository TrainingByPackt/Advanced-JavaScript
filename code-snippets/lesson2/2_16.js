function apiCall1( result ) { // Function that returns a promise
  return new Promise( ( resolve, reject ) => {
    resolve( 'value1' );
  } );
}
function apiCall2( result ) {// Function that returns a promise
  return new Promise( ( resolve, reject ) => {
    resolve( 'value2' );
  } );
}
myPromse.then( apiCall1 ).then( apiCall2 ).then( result =>  console.log( 'done!') ) ;
