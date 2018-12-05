var example = 5;
function test() {
  var testVariable = 10;
  console.log( example ); // Expect output: 5
  console.log( testVariable ); // Expect output: 10
}
test();
console.log( testVariable ); // Expect reference error
