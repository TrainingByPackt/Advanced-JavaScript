const state = { age: 15 }
function doSomething( name ) {
  return state.age > 13 ? `${name} is old enough` : `${name} is not old enough`;
}
