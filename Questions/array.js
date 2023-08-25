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

/* ৪. একটা ফাংশন লিখো। যেটা ইনপুট প্যারামিটার হিসেবে একটা আয়তক্ষেত্রের দৈর্ঘ্য আর উচ্চতাকে নিবে। তারপর সেই আয়তক্ষেত্র এর area (আয়তন) কে রেজাল্ট হিসেবে রিটার্ন করবে।  */
let area = 0;
function RectangularArea(length, width) {
  area = length * width;
  return area;
}
console.log("The area of Rectangular is ", RectangularArea(2, 5));

/* ৫. (ট্রিকি) কোন একটা array এর মধ্যে অনেকগুলা সংখ্যা আছে। সেই সংখ্যাগুলো থেকে second largest সংখ্যা বের করার একটা প্রোগ্রাম লিখো। দরকার হলে গুগলে সার্চ দাও। তারপর সার্চ রেজাল্ট দেখে বুঝে বুঝে করার চেষ্টা করো।  */
let array3 = [23, 25, 44, 56, 76, 78, 34, 32];
let array4 = [];
let max = 0;
function secondLargeNumber(array) {
  for (let i = 0; i < array.length; i++) {
    if (max < array[i]) {
      max = array[i];
    }
  }
  for (let i = 0; i < array.length; i++) {
    if (max != array[i]) {
      array4.push(array[i]);
    }
  }
  max = 0;
  for (let i = 0; i < array4.length; i++) {
    if (max < array4[i]) {
      max = array4[i];
    }
  }
  return max;
}

console.log("The second max number is ", secondLargeNumber(array3));

/* ১. একটা ফাংশন লিখো। সেটার মধ্যে তিনটা প্যারামিটার নিবে। এই তিনটা প্যারামিটার হবে কোন একটা ত্রিভুজের তিনটা বাহু এর দৈর্য্য। এখন তোমার কাজ হচ্ছে ফাংশনের ভিতরে কিছু হিসাব নিকাশ করে ত্রিভুজের area (আয়তন) বের করা। কোন একটা ত্রিভুজের তিনটা বাহুর দৈর্য্য দেয়া থাকলে সেটা থেকে কিভাবে আয়তন বের করতে হয় সেই ফর্মুলা গুগল থেকে খুঁজে বের করো।  */

function areaTriagnle(x, y, z) {
  const s = (x + y + z) / 2;
  const area = Math.sqrt(s * (s - x) * (s - y) * (s - z));
  return area;
}
console.log("The area of triangle is", areaTriagnle(3, 4, 5));

/* ২. কোন একটা সংখ্যা প্রাইম সংখ্যা (prime number) কিনা। সেটা চেক করার একটা ফাংশন লিখো।  */

function test_prime(n) {
  if (n === 1) {
    return false;
  } else if (n === 2) {
    return true;
  } else {
    for (var x = 2; x < n; x++) {
      if (n % x === 0) {
        return false;
      }
    }
    return true;
  }
}

console.log("The number is ", test_prime(25));
