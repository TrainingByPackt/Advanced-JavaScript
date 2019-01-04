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
