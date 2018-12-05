const courseCatalogMetadata = [
  {
    title: 'Linear Algebra II',
    description: 'Advanced linear algebra.',
    texts: [ {
      author: 'James Smith',
      price: 120,
      ISBN: '912-6-44-578441-0'
    } ]
  }
];
let [ { texts: [ { ISBN } ] } ] = courseCatalogMetadata;
console.log( ISBN );