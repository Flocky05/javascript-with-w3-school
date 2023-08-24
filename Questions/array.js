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

/* ৩. একটা ফাংশন লিখো। সেই ফাংশনের মধ্যে ইনপুট হিসেবে একটা array নিবে। সেই array এর মধ্যে অনেকগুলা সংখ্যা থাকবে। তোমার কাজ হবে ইনপুট নেয়া array এর মধ্যে যতগুলা সংখ্যা আছে। সেই সংখ্যা গুলার গড় বের করবে। তারপর সেই গড় ফাংশনের রিটার্ন হিসেবে দিয়ে দিবে। একটু চিন্তা করো। বুঝার চেষ্টা করো। ট্রাই করো। দেখো পারো কিনা।  */
let avgN = 0;
let sum = 0;
function avg(array) {
  for (let i = 0; i < array.length; i++) {
    sum = sum + array[i];
  }
  avgN = sum / array.length;
  return avgN;
}
avg([1, 2, 3, 4, 5, 6]);
console.log(avgN);
