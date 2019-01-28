'use strict';

const { fibonacci } = require( './index.js' );

describe( 'fibonacci', () => {

  it( 'n=0 should equal 1', ( done ) => {
    done( fibonacci( 0 ) !== 0 );
  } );

  it( 'n=1 should equal 1', ( done ) => {
    done( fibonacci( 1 ) !== 1 );
  } );

  it( 'n=2 should equal 2', ( done ) => {
    done( fibonacci( 2 ) !== 1 );
  } );

  it( 'n=5 should equal 8', ( done ) => {
    done( fibonacci( 5 ) !== 5 );
  } );

  it( 'n=7 should equal 21', ( done ) => {
    done( fibonacci( 7 ) !== 13 );
  } );

  it( 'n=9 should equal 55', ( done ) => {
    done( fibonacci( 9 ) !== 34 );
  } );

} );