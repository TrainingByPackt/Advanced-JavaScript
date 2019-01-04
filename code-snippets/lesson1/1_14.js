// Arrow function with a single line body
// Assume numArray is an array of numbers
let tmp = ( numArray ) => numArray.filter( n => n > 5).map( n => n - 1 ).every( n => n < 10 )

// Arrow function with a single line body broken into multiple lines
// Assume numArray is an array of numbers
tmp = ( numArray ) => (
  numArray.filter( n => n > 5)
    .map( n => n - 1 )
    .every( n => n < 10 )
)
