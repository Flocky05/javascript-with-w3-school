const numbers = [45, 78, 21, 54, 8, 23, 65, 98, 64, 58, 89, 12, 32];
const smallNumbers = numbers.filter((number) => number < 43);
//console.log(smallNumbers);
const oddNumbers = numbers.filter((num) => num % 2 != 0);
console.log(oddNumbers);
