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

// filter methods

function myFilterFunction(value) {
  return value > 10;
}
const newValue = numbers.filter(myFilterFunction);
console.log(newValue);

// reduce function that function return  a value not array.
function myReduceFunction(total, value, index, array) {
  console.log(total);
  console.log("---------");
  return total + value * value;
}
const newReduceValue = numbers.reduce(myReduceFunction);
console.log(newReduceValue);

// indexOf function
const friends = ["mehedi", "emon", "siam", "krishno", "alamin"];
const friend = friends.indexOf("emon") + 1;
console.log(friends[1], friend);

// find function

function myFindFunction(value, index, array) {
  return value > 18 && value < 45;
}
const newFindvalue = numbers.find(myFindFunction);
console.log(newFindvalue);
