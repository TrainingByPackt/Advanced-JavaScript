// Classes assignment

/*
Assignment
Create a class for a vehicle. The class should take in the number of wheels and max speed
and save them to the this scope. The class should have getter functions for num wheels and
max speed. Then create a subclass Car that extends vehicle. Car takes in a brand and max
speed. Car needs to set num wheels to 4 internally without referencing the variable.
Instantiate the subclass Car and log the output of the two getter functions.
 */

// Solution

class Vehicle {
  constructor( wheels, maxSpeed ) {
    this.wheels = wheels;
    this.maxSpeed = maxSpeed;
  }

  getWheels() {
    return this.wheels;
  }

  getMaxSpeed() {
    return this.maxSpeed;
  }
}

class Car extends Vehicle {
  constructor( brand, maxSpeed ) {
    super( 4, maxSpeed );
    this.brand = brand;
  }
}

let subaru = new Car( 'subaru', 180 );

console.log( subaru.getWheels() );
console.log( subaru.getMaxSpeed() );

/*
Hints
- The constructors for both classes need to have the correct input parameters
- Vehicle needs to save wheels and maxSpeed in the this scope
- the two getter functions need to get the respective variables from the this scope
- Car needs to extend Vehicle with extends keyword
- Car's constructor needs to call super before setting the brand parameter
 */

