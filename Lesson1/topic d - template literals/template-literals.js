// Template literal activity

/*
 Assignment:
 You are building a website for a real estate company. You must build a function that takes in an object with a property information and returns a formatted string that states the property owner, where the property is located (address), and how much they are selling it for (price)
*/

// Solution
function parseHouse( property ) {
  return `${property.owner} is selling the property at ${property.address} for ${property.price} USD`
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