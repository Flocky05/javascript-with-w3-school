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
