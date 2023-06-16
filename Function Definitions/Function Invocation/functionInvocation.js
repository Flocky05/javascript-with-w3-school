/*
Invoking a JavaScript Function
The code inside a function is not executed when the function is defined.

The code inside a function is executed when the function is invoked.

It is common to use the term "call a function" instead of "invoke a function".

It is also common to say "call upon a function", "start a function", or "execute a function".
*/
function myFunction2(a, b) {
  return a * b;
}
console.log(myFunction2(10, 2));

/*
The Global Object
When a function is called without an owner object, the value of this becomes the global object.

In a web browser the global object is the browser window.

This example returns the window object as the value of this:
*/
let x = myFunction1(); // x will be the window object

function myFunction1() {
  return this;
}

/*
Invoking a Function as a Method
In JavaScript you can define functions as object methods.

The following example creates an object (myObject), with two properties (firstName and lastName), and a method (fullName):
*/
const myObject = {
  firstName: "John",
  lastName: "Doe",
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};
console.log(myObject.fullName());
