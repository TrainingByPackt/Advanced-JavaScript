async function errorExample1( /* arguments */ ){
  return Promise.reject( 'Rejected!' );
}
async function errorExample2( /* arguments */ ){
  throw 'Rejected!';
}
async function errorExample3( /* arguments */ ){
  await Promise.reject( 'Rejected!' );
}
errorExample1().catch( console.log ); // Expected output: Rejected!
errorExample2().catch( console.log ); // Expected output: Rejected!
errorExample3().catch( console.log ); // Expected output: Rejected!
