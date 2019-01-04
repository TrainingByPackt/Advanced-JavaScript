'use strict';

// Solution:
function addItem( cart, item, quantity ) {
  // Duplicate cart
  const newCart = JSON.parse( JSON.stringify( cart ) );
  newCart.push( ...Array( quantity ).fill( item ) );
  return newCart;
}

// Run this code to test your addItem function. If an error is thrown then the code is not correct
const cart = [ 'soap', 'toothpaste', 'toothpaste' ];
const originalLength = cart.length;
const quantityToAdd = 3;
const cartModified = addItem( cart, 'carrot', quantityToAdd );

if ( cart.length !== originalLength ) {
  throw new Error( 'Original cart modified' );
}

if ( cartModified.length !== ( originalLength + quantityToAdd ) ) {
  throw new Error( 'Did not add items to the new cart' );
}

console.log('No function purity error!');
