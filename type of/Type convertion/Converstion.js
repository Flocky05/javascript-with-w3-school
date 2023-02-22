// string to number convertion is known as use the Number()

let pi = "3.1416";

console.log(typeof Number(pi));

// If anyone try convert a emty string to number the output will be 0
let x = "";
console.log(Number(x));

// string will be any name that time result will be NaN couse of NaN is also a number type, example

let name = "Rakibul";
console.log(Number(name));

// string to interger value convertion like:
let a = "12.263";
console.log(parseInt(a));

// string or any type of number to float from convertion

let b = "1245.2";
console.log(parseFloat(b));
