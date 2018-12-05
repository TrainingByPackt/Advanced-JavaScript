let sequence = gen();
console.log(sequence.next()); //Expected output: { value: 0, done: false }
console.log(sequence.next()); //Expected output: { value: 1, done: false }
console.log(sequence.next()); //Expected output: { value: 2, done: false }
