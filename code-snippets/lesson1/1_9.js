// Declared and initialized
const example = { prop1: 'test' };

// Variable reassigned
example = 5; // Expect TypeError error because variable was declared with const

// Object property updated
example.prop1 = 5; // Expect no error because subproperty was modified
