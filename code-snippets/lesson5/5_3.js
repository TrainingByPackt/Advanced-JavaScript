function notPure( input ) {
  input.prop2 = 'test';
}

function pure( input ) {
  input = JSON.parse( JSON.stringify( input ) );
  input.prop2 = 'test';
  return input;
}
