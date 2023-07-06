const numbers = [45, 78, 21, 54, 8, 23, 65, 98, 64, 58, 89, 12, 32];
const smallNumbers = numbers.filter((number) => number < 43);
//console.log(smallNumbers);
const oddNumbers = numbers.filter((num) => num % 2 != 0);
//console.log(oddNumbers);

const products = [
  { id: 1, name: "Mobile", price: 40000 },
  { id: 1, name: "Watch", price: 20000 },
  { id: 1, name: "Tablet", price: 23000 },
  { id: 1, name: "shoo", price: 90000 },
];
const mobilePrice = products.filter((product) => product.price === 40000);
console.log(mobilePrice);
