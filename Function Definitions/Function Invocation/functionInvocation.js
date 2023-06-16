/*
Invoking a JavaScript Function
The code inside a function is not executed when the function is defined.

The code inside a function is executed when the function is invoked.

It is common to use the term "call a function" instead of "invoke a function".

It is also common to say "call upon a function", "start a function", or "execute a function".
*/
function myFunction(a, b) {
  return a * b;
}
console.log(myFunction(10, 2));

/*
The Global Object
When a function is called without an owner object, the value of this becomes the global object.

In a web browser the global object is the browser window.

This example returns the window object as the value of this:
*/
let x = myFunction(); // x will be the window object

function myFunction() {
  return this;
}
