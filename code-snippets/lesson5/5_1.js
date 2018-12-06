function addImperative( arr ) {
  let result = 0;
  for ( let i = 0; i < arr.length; i++ ) {
    result += arr[ i ];
  }
  return result;
}

function addDeclarative( arr ) {
  return arr.reduce( ( red, val ) => red + val, 0 );
}
