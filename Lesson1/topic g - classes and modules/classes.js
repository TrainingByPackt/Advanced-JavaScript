// Classes assignment

/*
Assignment
You have been hired by a car sales company to design their sales website. You must create a vehicle class to store care information. The class must take in the car make, model, year, and color. The car should have a method to change the color. To test the class, create an instance that is a grey (color) 2005 (year) Subaru (make) Outback (model). Log the car’s variables then change the car’s color and log the new color.
 */

// Solution

class Car {
  constructor( make, model, year, color ) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.color = color;
  }

  setColor( color ) {
    this.color = color;
  }
}

let subaru = new Car( 'Subaru', 'Outback', 2005, 'Grey' );
console.log( 'Make',subaru.make );
console.log( 'Model', subaru.model );
console.log( 'Year', subaru.year );
console.log( 'Color', subaru.color );
subaru.setColor( 'Red' );
console.log( 'New color:', subaru.color );

/*
Hints
- The constructors for both classes need to have the correct input parameters
- Vehicle needs to save wheels and maxSpeed in the this scope
- the two getter functions need to get the respective variables from the this scope
- Car needs to extend Vehicle with extends keyword
- Car's constructor needs to call super before setting the brand parameter
 */

