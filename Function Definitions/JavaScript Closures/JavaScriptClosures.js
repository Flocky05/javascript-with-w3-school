/*
JavaScript variables can belong to the local or global scope.

Global variables can be made local (private) with closures.

Global Variables
A function can access all variables defined inside the function, like this:
*/

function myFunction() {
  let a = 4;
  return a * a;
}
console.log(myFunction());

/*
Variable Lifetime
Global variables live until the page is discarded, like when you navigate to another page or close the window.

Local variables have short lives. They are created when the function is invoked, and deleted when the function is finished.
*/

/*
A Counter Dilemma
Suppose you want to use a variable for counting something, and you want this counter to be available to all functions.

You could use a global variable, and a function to increase the counter:
*/
// Initiate counter
let counter = 0;

// Function to increment counter
function add() {
  counter += 1;
}

// Call add() 3 times
add();
add();
add();

// The counter should now be 3

/*
JavaScript Nested Functions
All functions have access to the global scope.  

In fact, in JavaScript, all functions have access to the scope "above" them.

JavaScript supports nested functions. Nested functions have access to the scope "above" them.

In this example, the inner function plus() has access to the counter variable in the parent function:
*/
function add() {
  let counter = 0;
  function plus() {
    counter += 1;
  }
  plus();
  return counter;
}

// Javascript Clouser
const add = (function () {
  let counter = 0;
  return function () {
    counter += 1;
    return counter;
  };
})();

add();
add();
add();
/*
JavaScript Closures one kind of function here has inside a function. and inner function are returned . As returned a function and that function update a value that's why changed value are saved in the js collection. After any time if you call again the innder function that time , it will called from updedted value to.
*/
