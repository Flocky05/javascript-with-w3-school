const friends = [
  "Md Mehedi Ahsan",
  "Shohanur Rhaman Emon",
  "Abu Siam",
  "Nawaz Talukder Songlap",
  "Rifat Hussain",
  "Abraham Khan Shanto",
  "Saif Sadi Akash",
  "Atahar Ali ",
];

const freindLength = friends.map((friend) => friend.length);
//console.log(freindLength);

const friendFristLetter = friends.map((friend) => friend[0]);
//console.log(friendFristLetter);

const numbers = [10, 25, 12, 65, 25, 56, 85];

const numberAdd = numbers.map((x) => x + 3);
//console.log(numberAdd);

const products = [
  { id: 1, name: "Mobail", price: 40000 },
  { id: 1, name: "Watch", price: 20000 },
  { id: 1, name: "Tablet", price: 23000 },
  { id: 1, name: "shoo", price: 90000 },
];

//const productsName = products.map((product) => product.name);
//console.log(producsName);

const productPrice = products.map((product) => product.price);
console.log(productPrice);
