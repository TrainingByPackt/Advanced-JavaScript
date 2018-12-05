function getPersionES6( name, age, height ) {
  return {
    name,
    height,

    getAge(){ return age; }
  };
}
getPersionES6( 'Zachary', 23, 195 ).getAge()
// Expected output: 23
