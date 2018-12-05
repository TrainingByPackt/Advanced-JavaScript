// Define the tag function
function tagFunction( strings, numExp, fruitExp ) {
  const str0 = strings[0]; // 'We have '
  const str1 = strings[1]; // ' of '
  const quantity = numExp < 10 ? 'very few' : 'a lot';
  return str0 + quantity + str1 + fruitExp + str2;
}
const fruit = 'apple', num = 8;
// Note: lack of parenthesis or whitespace when calling tag function
const output = tagFunction`We have ${num} of ${fruit}. Exciting!`
console.log( output ) // Expected output: We have very few of apples. Exciting!
