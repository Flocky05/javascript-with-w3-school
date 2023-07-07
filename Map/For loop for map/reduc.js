const numbers = [45, 98, 23, 15, 65];
/*

*/
//const total = numbers.reduce((previous, current) => previous + current, 0);
//console.log(total);
function total(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum = sum + numbers[i];
  }
  return sum;
}
console.log(total(numbers));
