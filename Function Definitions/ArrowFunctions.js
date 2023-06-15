/*
Arrow Functions
Arrow functions allows a short syntax for writing function expressions.

You don't need the function keyword, the return keyword, and the curly brackets.

Example
// ES5
var x = function(x, y) {
  return x * y;
}

// ES6
const x = (x, y) => x * y;
*/

const x = (x, y) => x * y;
console.log(x(4, 3));
