class House{
  constructor(address, floors = 1) {
    this.address = address;
    this.floors = floors;
  }
}
// Instantiate the class
let myHouse = new House( '1100 Fake St., San Francisco CA, USA', 2, false );
