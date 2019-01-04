setTimeout( () => {
  // WARNING: this may take a long time to run on a slow computer
  // Try with smaller numbers first
  for( let i = 0; i < 2000000000; i++ ) {}
  console.log( 'done delaying' );
}, 0 );
setTimeout( () => { console.log( 'done!' ) }, 0 );
