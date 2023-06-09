/*
Invoking a JavaScript Function
The code inside a function is not executed when the function is defined.

The code inside a function is executed when the function is invoked.

It is common to use the term "call a function" instead of "invoke a function".

It is also common to say "call upon a function", "start a function", or "execute a function".

In this tutorial, we will use invoke, because a JavaScript function can be invoked without being called.
*/
function myFunction(a, b) {
  return a * b;
}
myFunction(10, 2);

/*
What is this?
In JavaScript, the this keyword refers to an object.

Which object depends on how this is being invoked (used or called).

The this keyword refers to different objects depending on how it is used:

In an object method, this refers to the object.
Alone, this refers to the global object.
In a function, this refers to the global object.
In a function, in strict mode, this is undefined.
In an event, this refers to the element that received the event.
Methods like call(), apply(), and bind() can refer this to any object.
*/
let x = myFunction(); // x will be the window object

function myFunction() {
  return this;
}
