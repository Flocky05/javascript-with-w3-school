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
    const triple = number * 3;
    output1.push(triple);
  }
  return output1;
}
console.log(getTriple(numbers));
