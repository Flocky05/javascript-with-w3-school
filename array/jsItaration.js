//The forEach() method calls a function (a callback function) once for each array element.

const numbers = [45, 4, 9, 16, 25];

function myfunction(value, index, array) {
  console.log(value);
  console.log(index);
  console.log(array);
  console.log("---------------");
}
numbers.forEach(myfunction);

// map it's normally create a new array which help you added or multiply each of element in the array
function myMapFunction(value) {
  return value + 3;
}
const newNumbers = numbers.map(myMapFunction);
console.log(newNumbers);
