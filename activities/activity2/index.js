'use strict';

/* Assignment:

 You have been tasked to build a server that interfaces with a database. You must write code to look up set and look up basic user objects in the database. Import the simple_db.js file. Using the get and insert commands, write the following program using async/await syntax.

1) Look up the key 'john'. If it exists, log the age field of the result object.
2) Look up the key 'sam'. If it exists, log the age field of the result object.
3) Look up your first name as a database key. If it does not exist, insert your first name. Associate an object containing your first name, last name, and age. Look up the new data association and log the age.

For any db.get operation that fails, save the key into an array. At the end of the program, print the keys that failed.

DB API:

db.get( index )
Takes in an index. Returns a promise. Promise is fulfilled with the db entry associated with that index. If index does not exist, the lookup fails, or key is not specified, The promise is rejected with an error.

db.insert( index, insertData )
Takes in an index and a data. Returns a promise. Promise is fulfilled with the key inserted if the operation completes. If the operation fails, or there is no key or insert data specified, the promise is rejected with an error.

 */

const db = require( './simple_db' );

async function main() {

  const missingKeys = [];

  try {
    const user = await db.get( 'john' );
    console.log( user.age );
  } catch ( err ) {
    missingKeys.push( 'john' );
  }

  try {
    const user = await db.get( 'sam' );
    console.log( user.age );
  } catch ( err ) {
    missingKeys.push( 'sam' );
  }

  try {
    const user = await db.get( 'zach' );
    console.log( user.age );
  } catch ( err ) {
    missingKeys.push( 'zach' );
    await db.insert( 'zach', { first: 'zach', last: 'smith', age: 25 } );
    try {
      const user = await db.get( 'zach' );
      console.log( user.age )
    } catch ( err ) {
      missingKeys.push( 'zach' );
    }
  }

  return missingKeys;

}

main().then( console.log ).catch( ( err ) => console.log( `Error: ${err}` ) );

/* Expected output;

43
<your age>
[ 'sam', <your first name>f ]

 */

/* Hits:
- Create an async main function so you can await your db calls
- When you call main, you have to attach a .then and .catch handler to catch runtime errors and the return value
- Await the db calls
- either Use try/catch to handle the errors or use promise.catch()
 */