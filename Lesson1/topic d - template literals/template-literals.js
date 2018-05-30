// Template literal activity

/*
 Assignment:
 Create a function that takes in an object representing a house with the parameters address,
 floors, price, and owner. Have the function return an object literal that prints the
 parameters in order on separate lines using a single object literal and without using any
 escape characters.
*/

// Solution
function parseHouse( house ) {
  return `address: ${house.address}
floors: ${house.floors}
price: ${house.price}
owner: ${house.owner}`
}

const house = {
  address: "123 Main St, San Francisco CA, USA",
  floors: 2,
  price: 5000000,
  owner: "John Doe"
};

console.log( parseHouse( house ) );

/*
  Hints
  - Use expression syntax to embed the values
  - Use multi line object literal syntax to get multiple lines
  - all whitespace is parsed on multi line object literals
  Make sure that there are not space or tab characters before the 2nd, 3rd, and 4th lines
 */