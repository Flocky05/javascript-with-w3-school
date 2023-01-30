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
