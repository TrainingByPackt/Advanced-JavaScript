class House{
  constructor( address, floors = 1) {
    this.address = address;
    this.floors = floors;
  }
  getFloors() {
    return this.floors;
  }
}
let myHouse = new House( '1100 Fake St., San Francisco CA, USA', 2 );
console.log( myHouse.getFloors() ); // Expected output: 2
