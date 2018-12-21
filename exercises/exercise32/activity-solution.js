'use strict';

//Activity C
// You have been hired as a developer to upgrade an online store's shopping cart implementation. Build a function to add items to the shopping cart. Your function should be pure. Create the function in the provided file (activity-test.js). The file will have basic tests to test purity.

// Solution:
function addItem( cart, item, quantity ) {
  // Duplicate cart
  const newCart = JSON.parse( JSON.stringify( cart ) );
  newCart.push( ...Array( quantity ).fill( item ) );
  return newCart;
}
