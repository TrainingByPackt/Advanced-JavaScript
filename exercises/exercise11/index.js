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
const [ course ] = courseCatalogMetadata;
const [ { texts: textbooks } ] = courseCatalogMetadata;
const [ { texts: [ textbook ] } ] = courseCatalogMetadata;
const [ { texts: [ { ISBN } ] } ] = courseCatalogMetadata;

console.log( course );
console.log( textbooks );
console.log( textbook );
console.log( ISBN );
