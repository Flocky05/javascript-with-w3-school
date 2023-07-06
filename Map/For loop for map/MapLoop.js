let numbers = [1, 2, 3, 6, 4, 3, 2];
let output = [];
let output1 = [];
for (const number of numbers) {
  const double = number * 2;
  output.push(double);
}
//console.log(output);

function getTriple(numbers) {
  for (const number of numbers) {
    const triple = tripleIt(number);
    output1.push(triple);
  }
  return output1;
}
//use arrow function that is called inside of the getTriple()
const tripleIt = (num) => num * 3;
console.log(getTriple(numbers));

const tripleGetMap = numbers.map(tripleIt);
console.log(tripleGetMap);
