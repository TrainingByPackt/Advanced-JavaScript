'use strict';

module.exports = { get: get, insert: insert };

const db = {
  'john': { first: 'john', last: 'doe', age: 43 }
};

function get( key ) {
  return new Promise( ( resolve, reject ) => {
    setTimeout( () => {

      if ( !key ) {
        return reject( new Error( 'Must specify key' ) );
      }

      if ( !db[ key ] ) {
        return reject( new Error( 'Database entry does not exist' ) );
      }

      resolve( db[ key ] );

    }, 50 );
  } );
}

function insert( key, data ) {
  return new Promise( ( resolve, reject ) => {
    setTimeout( () => {

      if ( !key ) {
        return reject( new Error( 'Must specify key' ) );
      }

      if ( !data ) {
        return reject( new Error( 'Must specify data to set' ) );
      }

      if ( db[ key ] ) {
        return reject( new Error( 'Database entry already exists' ) );
      }

      db[ key ] = data;
      resolve( key )

    }, 50 );
  } );
}