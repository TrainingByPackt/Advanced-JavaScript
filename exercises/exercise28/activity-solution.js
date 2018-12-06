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

/* Hints:
- Create a function called addItem
  - Takes in three parameters, the cart array, the item to add, and the quantity to add
- Duplicate the cart to prevent side effects
  - Use JSON operations for simplest duplication JSON.parse( JSON.stringify( cart ) )
  - Can also step through original cart array with a loop and push each item to new array
  - Can also use cart.map( () => {} ) since all items in array are simple types
  - Can also use rest/spread operator newCart= [ ...cart ] because all items are simple types
- Push the new items to the new cart array
  - Use a for loop
  - Use rest/spread operator and Array constructor with Array.fill()
- Return the new cart array

 */