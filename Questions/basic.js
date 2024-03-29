/* জাভাস্ক্রিপ্ট কি জিনিস এইটা কি জানো? */
/* JavaScript is the Programming Language for the Web. JavaScript can update and change both HTML and CSS. JavaScript can calculate, manipulate and validate data. */

/* জাভাস্ক্রিপ এ primitive and non primitive data types কি কি ? উদাহরণ হিসেবে বলো।  */
/* প্রকারভেদ
জাভাস্ক্রিপ্টে 2 প্রকার তথ্য বা data রয়েছে, এগুলো হল নিম্নরূপ।

Primitive ডাটা টাইপ এবং
Non-primitive বা reference ডাটা টাইপ
Primitive ডাটা টাইপ
জাভাস্ক্রিপ্টে 5 প্রকার Primitive ডাটা টাইপ রয়েছে। এগুলো হল নিম্নরূপ -

String -
Number - গাণিতিক বা numeric মান নির্ধারণ করে,
Undefined - Undefined মান নির্ধারণ করে,
Boolean - কেবল মাত্র দুইটি মান বা value ব্যবহার করে অর্থাৎ "true" এবং "false" ব্যবহার করে মান নির্ধারণ করে,
Null - শূন্য বা null মান নির্ধারণ করে, 


Non-primitive বা reference ডাটা টাইপ
জাভাস্ক্রিপ্টে 3 প্রকার Non-primitive বা reference ডাটা টাইপ রয়েছে। এগুলো হল নিম্নরূপ -

Object -
Array - একই রকম মান বা value গুলোর গুচ্ছ বা group তৈরি করে,
RegExp - regular expression গুলো তৈরি করে,*/

/*  array এর মধ্যে কয়টা উপাদান (element) আছে সেটা কিভাবে বের করে  */
const array = [1, 2, 3, 4, 5, 67, 6];
console.log(array.length);

/* array এর উপাদান গুলা এর পজিশন ( index) কিভাবে কাজ করে। কত দিয়ে শুরু হয়। এবং মান কিভাবে চেইঞ্জ হয়।  */
console.log(array.indexOf(47));

/* starting number is O and increasing one by one , if any element is not found then its shows -1 */

/* আসকে আমার মন ভালো নেই এই কথা ৩৯ বার আউটপুট হিসেবে দেখাও। */

for (let i = 0; i < 39; i++) {
  console.log("আসকে আমার মন ভালো নেই");
}
console.log("................................................");
let j = 0;
while (j <= 39) {
  console.log("আসকে আমার মন ভালো নেই");
  j++;
}

/* একটা কোড লিখে ৫৮ থেকে ৯৮ পর্যন্ত যত সংখ্যা আছে সেগুলাকে দেখাও  */

for (let num = 58; num <= 98; num++) {
  console.log(num);
}

/* একটা কোড লিখে ৪১২ থেকে ৪৫৬ পর্যন্ত যত জোর সংখ্যা আছে সেগুলাকে দেখাও  */

for (even = 412; even <= 456; even++) {
  if (even % 2 == 0) {
    console.log(even);
  }
}

/* একটা ফর লুপ চালাও। ৩০ থেকে ৮৬ পর্যন্ত। আর এই লুপ ৪৪ এ গেলে ব্রেক করবে। সেই জিনিস কোড করে দেখাও  */

for (let numbreak = 30; numbreak <= 86; numbreak++) {
  if (numbreak == 44) {
    break;
  } else {
    console.log(numbreak);
  }
}

/* তোমার যত বই আছে সেগুলার দাম নিয়ে একটা array লিখে ফেলো। যে বই গুলোর দাম ২০০ টাকার উপরে সেগুলাকে স্কিপ করবে। অর্থাৎ সেগুলাকে আউটপুট হিসেবে দেখাবে না। বাকিদের কে আউটপুট হিসেবে দেখাবে। দেখো করতে পারো কিনা।  */

const books = [120, 125, 652, 62, 985, 3, 266, 652, 326, 123];
let newBooks = [];
for (let m = 0; m < books.length; m++) {
  if (books[m] < 200) {
    newBooks.push(books[m]);
  }
}
console.log(newBooks);

/* Write an arrow function that will take 3 parameters, will multiply
the parameters and will return the result. */

/* function mul(a, b, c) {
  const total = a * b * c;
  return total;
}
const result = mul(2, 3, 5);
console.log(result);
 */

const mul = (a, b, c) => {
  const total = a * b * c;
  return total;
};
const result = mul(1, 2, 3);
console.log(result);

/* Write the following sentence in three lines and print the result:
I am a web developer. I love to code. I love to eat biryani. */

const line = () => {
  const a = "I am a web developer.";
  const b = "I love to code.";
  const c = " I love to eat biryani.";
  return a + " " + b + " " + c;
};

console.log(line());

/* Write an arrow function that will take 2 parameters: One parameter
will come from you and the other parameter will be a default
parameter. Add these two parameters and return the result. */

const add = (a, b = 0) => {
  const total = a + b;
  return total;
};
const result1 = add(12, 67);
console.log(result1);

/* Write an arrow function where it will do the following:
a) It will take an array where the array elements will be the
name of your friends
b) Check if the length of each element is even, push elements
with even length to a new array and return the result
Print the result. */

const friends = [
  "Mehedi",
  "Emon",
  "Siam",
  "Shanto",
  "Krishno",
  "Akash",
  "Pulok",
  "Songlap",
];
const evenName = [];
const allFriends = () => {
  for (let i = 0; i < friends.length; i++) {
    if (friends[i].length % 2 == 0) {
      evenName.push(friends[i]);
    }
  }
};
console.log(allFriends());
console.log(evenName);

/* Write an arrow function where it will do the following:
a) Square each array element
b) Calculate the sum of the squared elements
c) Return the average of the sum of the squared elements
Print the result. */

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const newNumbers = [];
let sum = 0;

const numberOparation = () => {
  for (let i = 0; i < numbers.length; i++) {
    const sqrNumber = numbers[i] * numbers[i];
    sum = sum + sqrNumber;
    newNumbers.push(sqrNumber);
  }
  return newNumbers;
};

console.log(numberOparation());
console.log(sum);
console.log(sum / numbers.length);

/* Write an arrow function where it will do the following:
a) It will take two array inputs
b) Combine the two arrays and assign them in a new array
c) Find the maximum number from the new array and return the
result
Print the result. */

const array1 = [1, 3, 4, 5, 7, 9, 11, 13, 34, 12];
const array2 = [2, 4, 8, 6, 4, 0, 8, 65, 53, 23];
const combineArray = [];
let max = 0;
const ComboArray = () => {
  for (let i = 0; i <= array1.length - 1; i++) {
    combineArray.push(array1[i]);
  }
  for (let j = 0; j <= array2.length - 1; j++) {
    combineArray.push(array2[j]);
  }
  for (let k = 0; k <= combineArray.length - 1; k++) {
    if (combineArray[k] > max) {
      max = combineArray[k];
    } else {
      max = max;
    }
  }
  return max;
};

console.log("The bigest Number is ", ComboArray());
console.log("The new array is ", combineArray);
