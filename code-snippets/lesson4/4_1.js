function adjustValue( value ) {
  if ( value > 5 ) {
    value--;
  } else if ( value < -5 ) {
    value++;
  }
  return value
}
