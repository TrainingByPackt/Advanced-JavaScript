// Array destructuring assignment

/*
Assignment:
You have registered for university courses and need to buy the texts required for the classes. You are building a program to scrape data from the course list and obtain the ISBN numbers for each text book required. Use object and array nested destructuring to obtain the ISBN value of the first text of the first course in the courses array. The courses array follow the following format:
 */

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


// Solution
// Expected output: '912-6-44-578441-0'
/* Hints
- Destructure with syntax discussed in lesson
- Skip values with holes in the variables array
- Capture the remaining values with the rest/spread operator
 */