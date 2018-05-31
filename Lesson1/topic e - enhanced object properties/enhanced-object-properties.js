// Enhanced object properties example

/*
  Assignment:
  Create a function that takes in 5 inputs ( arg1, arg2, arg3, arg4, arg5 ) and returns
  an object. The function should create the object using ES6 syntax. The object should
  have a property created from arg1,  a function property called getArg2 that returns arg2,
  and a computed property that is the concatenation of arg3 and arg4. The value for the
  final property should be arg5.
 */

// Solution
function buildObject( arg1, arg2, arg3, arg4, arg5 ) {
  return {
    arg1,
    getArg2() {
      return arg2
    },
    [ arg3 + arg4 ]: arg5
  };
}

console.log(
  buildObject( 'arg1', 'arg2', 'arg3', 'arg4', 'arg5' )
);

/*
Hints
- Use property notation for arg1
- Use function notation for arg2
- Use computed property notation for the concatination of arg3 and arg4 (arg3+arg4)
 */

