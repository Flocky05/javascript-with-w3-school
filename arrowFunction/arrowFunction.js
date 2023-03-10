/* 
Arrow functions allow us to write shorter function syntax:

let myFunction = (a, b) => a * b;
*/

hello = () => {
  return "Hello World!";
};

/* If you have parameters, you pass them inside the parentheses: */
hello = (val) => "Hello " + val;

/* The handling of this is also different in arrow functions compared to regular functions.

In short, with arrow functions there are no binding of this.

In regular functions the this keyword represented the object that called the function, which could be the window, the document, a button or whatever. */

// Regular Function:
hello = function () {
  document.getElementById("demo").innerHTML += this;
};

// The window object calls the function:
window.addEventListener("load", hello);

// A button object calls the function:
document.getElementById("btn").addEventListener("click", hello);

/* With an arrow function this represents the owner of the function: */
// Arrow Function:
hello = () => {
  document.getElementById("demo").innerHTML += this;
};

// The window object calls the function:
window.addEventListener("load", hello);

// A button object calls the function:
document.getElementById("btn").addEventListener("click", hello);
