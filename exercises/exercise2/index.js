// Variable Declaration exercise
console.log('Hoisted before assignment:', hoisted );
var hoisted = 'this got hoisted';
console.log('Hoisted after assignment:',hoisted);

try{
  console.log(notHoisted1);
} catch(err){
  console.log('Not hoisted1 with error:', err.message);
}
let notHoisted1 = 5;
console.log('notHoisted1 after assignment', notHoisted1);

try{
  console.log(notHoisted2);
} catch(err){
  console.log('Not hoisted2 with error:', err.message);
}
const notHoisted2 = [1,2,3];
console.log('notHoisted2 after assignment', notHoisted2);

try{
  notHoisted2 = 'new value';
} catch(err){
  console.log('Not hoisted 2 was not able to be changed');
}
notHoisted2.push(5);
console.log('notHoisted2 updated. Now is:', notHoisted2);
