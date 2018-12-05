// Top level scope
function scopeExample() {
  // Scope block 1
  for ( let i = 0; i < 10; i++ ){ /* Scope block 2 */ }
  if ( true ) { /* Scope block 3 */ } else {  /* Scope block 4 */ }
  // Braces without keywords create scope blocks
  { /* Scope block 5 */ }
  // Scope block 1
}
// Top level scope
