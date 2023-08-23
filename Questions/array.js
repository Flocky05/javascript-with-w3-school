let array = [1, 2, 3, 4, 5, 6];
let array2 = [2, 4, 6, ...array];
console.log(array2);
/* ১. একটা কোড লিখো। যেটা দিয়ে কোন একটা array এর মধ্যে সবচেয়ে ছোট সংখ্যা বের করে দিতে পারবে।  */
let numbers = [34, 55, 1, 5, 34, 67, 54, 76, 87, 53, 34, 56];
let min = 23435;
for (let i = 0; i <= numbers.length - 1; i++) {
  if (numbers[i] < min) {
    min = numbers[i];
  }
}
console.log(min);
/* ২. একটা কোড লিখো যেটা দিয়ে তিনটা সংখ্যার মধ্যে সবচেয়ে ছোট সংখ্যা বের করে দিবে।   */
let a = 34,
  b = 46,
  c = 98;
if (a < b && a < c) {
  console.log("The smallest number is", a);
} else if (b < a && b < c) {
  console.log("The smallest number is ", b);
} else console.log("The smallest number is ", c);
