/*
Var
Before the advent of ES6, var declarations ruled. There are issues associated with variables declared with var, though. That is why it was necessary for new ways to declare variables to emerge. First, let's get to understand var more before we discuss those issues.

var variables can be re-declared and updated
This means that we can do this within the same scope and won't get an error.
*/
var greeter = "hey hi";
var greeter = "say Hello instead";
console.log(greeter);

/*
Hoisting of var
Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their scope before code execution. This means that if we do this:
*/
console.log(greeter);
var greeter = "say hello";
