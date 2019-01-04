const data = { f1: 'v1', f2: '2', f3: 'v3' };
const { f1, f2: field2, f4 = 'v4' } = data;
console.log( f1, field2, f4 );
