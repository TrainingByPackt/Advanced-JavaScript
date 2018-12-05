class House {
  constructor( address = 'somewhere' ) {
  this.address = address;
}
}
class Mansion extends House {
  constructor( address, floors ) {
    super( address );
    this.floors = floors;
  }
}
let mansion = new Mansion( 'Hollywood CA, USA', 6, 'Brad Pitt' );
console.log( mansion.floors ); // Expected output: 6
