//The forEach() method calls a function (a callback function) once for each array element.

const numbers = [45, 4, 9, 16, 25];

function myfunction(value, index, array) {
  console.log(value);
  console.log(index);
  console.log(array);
  console.log("---------------");
}

numbers.forEach(myfunction);
