function getPersonES5( name, age, height ) {
  return {
    name: name,
    height: height,

    getAge: function(){ return age; }
  };
}
getPersonES5( 'Zachary', 23, 195 ).getAge()
// Expected output: 23
