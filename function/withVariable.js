//rules: In frst perameter have one or more variable that can be changeable.

function sum(a, b) {
  console.log("The summation of two numbers is " + (a + b));
}
sum(3, 5);

// when we declar a variable outsite of funciton that time it works as..

function run(a, b) {
  console.log(a + b);
}
let x = run(10, 20);

// when we use variable insite function

function mul(a, b) {
  let multiplication = a * b;
  console.log(multiplication);
}
mul(12, 10);

// some time you use return , if you use return you have to use console.log() in the outsite of function otherwise function don't work.
function div(a, b) {
  return a / b;
}
console.log(div(10, 5));
