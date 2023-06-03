/*
Reduce Activity in Loops
Loops are often used in programming.

Each statement in a loop, including the for statement, is executed for each iteration of the loop.

Statements or assignments that can be placed outside the loop will make the loop run faster.
*/

// bad code
for (let i = 0; i < arr.length; i++) {}

// Good code
let l = arr.length;
for (let i = 0; i < l; i++) {}

// Reduce DOM Access
/*
Accessing the HTML DOM is very slow, compared to other JavaScript statements.

If you expect to access a DOM element several times, access it once, and use it as a local variable:
*/
const obj = document.getElementById("demo");
obj.innerHTML = "Hello";
