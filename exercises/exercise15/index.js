function *gen() {
  let i = 1;
  while (true){
    yield i;
    i = i * 2;
  }
}
const generator = gen();
console.log( generator.next(), generator.next(), generator.next() );
