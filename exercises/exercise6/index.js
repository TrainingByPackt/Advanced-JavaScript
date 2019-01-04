
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
