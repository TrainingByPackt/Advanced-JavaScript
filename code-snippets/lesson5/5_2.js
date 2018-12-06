const state = { prop1: 5 };

function notPure () {
  return state.prop1 > 0 ? 'Valid': 'Invalid';
}

function pure( val ) {
  return val > 0 ? 'Valid': 'Invalid';
}

notPure(); // Expected output: 'Valid'
pure( state.prop ); // Expected output: 'Valid'
