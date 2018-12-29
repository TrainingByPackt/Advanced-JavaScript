"use strict";

// Function 1
var fn1 = function fn1(a, b) {
  b++;
  a++;
  return a + b;
};

// Function 2
var fn2 = function fn2(a, b) {
  return a * b;
};

// Function 3
var fn3 = function fn3(a) {
  a = a * a;
  return a + a;
};

// Function 4
var fn4 = function fn4() {
  var a = 10;
  a = a * a;
  return a + a;
};

// Function 5
var fn5 = function fn5(a) {
  return { prop1: a };
};

console.log(fn1(5, 10));
console.log(fn2(5, 10));
console.log(fn3(5));
console.log(fn4());
console.log(fn5(5));

//# sourceMappingURL=app.transpiled.js.map