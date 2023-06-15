/*
JavaScript functions are defined with the function keyword.

You can use a function declaration or a function expression.

Function Declarations
Earlier in this tutorial, you learned that functions are declared with the following syntax:

function functionName(parameters) {
  // code to be executed
}
*/
let a = 3;
let b = 4;
function myFunction(a, b) {
  return a * b;
}
console.log(myFunction(a, b));

/*
The Function() Constructor
As you have seen in the previous examples, JavaScript functions are defined with the function keyword.

Functions can also be defined with a built-in JavaScript function constructor called Function().
*/
const myFunction1 = new Function("a", "b", "return a * b");

let x = myFunction1(5, 3);
console.log(x);
