// sort means soring the value frist letter
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let x = fruits.sort();
console.log(x);

//array reverse() means that last element to frist element printed
let y = fruits.reverse();
console.log(y);

//numeric sort is a method that is used for numeric value like:

const points = [12, 23, 34, 54, 1, 2, 3, 4, 5];
x = points.sort(function (a, b) {
  return a - b;
});
console.log(x);

// from an array highes vlue finding
let highesValue = points[points.length - 1];
console.log(highesValue);
