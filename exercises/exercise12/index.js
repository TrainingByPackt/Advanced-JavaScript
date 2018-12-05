class Vehicle {
  constructor( wheels, topSpeed ) {
    this.wheels = wheels;
    this.topSpeed = topSpeed;
  }
}
const tricycle = new Vehicle( 3, 20 );
console.log( tricycle.wheels, tricycle.topSpeed );
