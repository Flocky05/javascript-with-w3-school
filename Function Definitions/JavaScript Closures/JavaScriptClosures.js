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
