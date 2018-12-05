function *gen() {
  let i = 0;
  while (true){
    let inData = yield i++;
    console.log( inData );
  }
}

let sequence = gen();
sequence.next()
sequence.next( 'test1' )
sequence.next()
sequence.next( 'test2' )

// Expected output:
// 'test1'
// undefined
// 'test2'
