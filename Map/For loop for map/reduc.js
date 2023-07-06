const numbers = [45, 98, 23, 15, 65];
/*
let sum = 0;
for (const i = 0; i <= numbers.length; i++) {
  sum = sum + numbers[i];
}
console.log(sum);

*/
const total = numbers.reduce((previous, current) => previous + current, 0);
console.log(total);
