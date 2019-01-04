async function nested1() { return await Promise.reject( 'Error!' ); }
async function nested2() { return await nested1; }
async function nested3() { return await nested2; }
async function nestedErrorExample() {
  try{ const value1 = await nested3; }
  catch( err ){ console.log( err ); } // Expected output: Oh no!
}
nestedErrorExample();
