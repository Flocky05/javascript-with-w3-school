/*
Var
Before the advent of ES6, var declarations ruled. There are issues associated with variables declared with var, though. That is why it was necessary for new ways to declare variables to emerge. First, let's get to understand var more before we discuss those issues.

var variables can be re-declared and updated
This means that we can do this within the same scope and won't get an error.
*/
// var greeter = "hey hi";
// var greeter = "say Hello instead";
// console.log(greeter);

/*
Hoisting of var
Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their scope before code execution. This means that if we do this:
*/
// console.log(greeter);
// var greeter = "say hello";

/*
Let
let is now preferred for variable declaration. It's no surprise as it comes as an improvement to var declarations. It also solves the problem with var that we just covered. Let's consider why this is so.

let is block scoped
A block is a chunk of code bounded by {}. A block lives in curly braces. Anything within curly braces is a block.
*/
let greeting1 = "say Hi";
let times = 4;

if (times > 2) {
  let hello = "say Hello instead";
  console.log(greeting1); // "say Hello instead"
}
console.log(greeting1); // hello is not defined

/*
Hoisting of let
Just like  var, let declarations are hoisted to the top. Unlike var which is initialized as undefined, the let keyword is not initialized. So if you try to use a let variable before declaration, you'll get a Reference Error.
*/

/*
Const
Variables declared with the const maintain constant values. const declarations share some similarities with let declarations.

const declarations are block scoped
Like let declarations, const declarations can only be accessed within the block they were declared.

const cannot be updated or re-declared
This means that the value of a variable declared with const remains the same within its scope. It cannot be updated or re-declared. So if we declare a variable with const, we can neither do this:
*/
const x = 10;
x = 12; //we can't decler this couse its not a rules
// error:  Assignment to constant variable.

/*
Hoisting of const
Just like let, const declarations are hoisted to the top but are not initialized.
*/
