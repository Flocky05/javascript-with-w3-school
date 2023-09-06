/* Write a function that will take hour as the input parameter and will
convert it into minutes and will return the result in minutes. */

function HourCoverter(time) {
  let minutes = time * 60;
  return minutes;
}
console.log(HourCoverter(10));

/* Write a function findLeapYear() that will take the array
[2023,2024,2025,2028,2030] as the input parameter and will check if
each year is a leap year. If a year is a leap year insert that year in a
new array, return the new array and print the result. */

let years = [2023, 2024, 2025, 2028, 2030];
let leapYear = [];
function findLeapYear(years) {
  for (let i = 0; i < years.length; i++) {
    if ((years[i] % 4 == 0 && years[i] % 100 != 0) || years[i] % 400 == 0) {
      leapYear.push(years[i]);
    }
  }
  return leapYear;
}
console.log(findLeapYear(years));

/* Write a function findOddSum() that will take the array [5, 7, 8, 10, 45, 30]
as the input parameter and will return the sum of the odd numbers. */

let array = [5, 7, 8, 10, 45, 30];
let sum = 0;
function findOddSum(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 != 0) {
      sum = sum + array[i];
    }
  }
  return sum;
}
console.log(findOddSum(array));

/* ১. leapYear() নামে ফাংশন লিখো এবং নেক্সট ইয়ার অর্থাৎ ২০২৩ কি leap year নাকি সেটা চেক করো। Leap year হলে ফাংশন true রিটার্ন করবে আর leap year না হলে false রিটার্ন করবে। */

function NewleapYear(year) {
  let newYear = year + 1;
  if (newYear % 400 == 0 || (newYear % 100 != 0 && newYear % 4 == 0)) {
    return true;
  } else return false;
}
console.log(NewleapYear(2024));

/* ২. তোমার বয়স কি odd নাকি even সংখ্যা সেটা চেক কর একটা ফাংশন দিয়ে। সেই ফাংশনকে কোন সংখ্যা প্যারামিটার হিসেবে দিলে, সেই সংখ্যা Even হলে ফাংশন true রিটার্ন করবে আর Odd হলে false রিটার্ন করবে। */

function oddOrEven(input) {
  if (input % 2 == 0) {
    return true;
  } else {
    return false;
  }
}
console.log(oddOrEven(24));

/* কোন একটা array এর মধ্যে অনেকগুলা সংখ্যা আছে। সেই সংখ্যাগুলো থেকে second largest সংখ্যা বের করার একটা প্রোগ্রাম লিখো। দরকার হলে গুগলে সার্চ দাও। তারপর সার্চ রেজাল্ট দেখে বুঝে বুঝে করার চেষ্টা করো।  */

let numbers = [2, 3, 24, 78, 65, 45, 79, 76, 45, 88];
function secondLargeNumber(numbers) {
  let newNumbers = numbers.sort((a, b) => a - b);
  return newNumbers[newNumbers.length - 2];
}
console.log(secondLargeNumber(numbers));

/* ২. কোন একটা সংখ্যা প্রাইম সংখ্যা (prime number) কিনা। সেটা চেক করার একটা ফাংশন লিখো।  */

function isPrimeNumber(number) {
  if (number == 1) return false;
  if (number == 2) return true;
  if (number == 3) return true;
  if (number != 2 && number % 2 == 0) return false;
  else {
    for (let i = 3; i < number; i += 2) {
      if (number % i == 0) {
        return false;
      } else return true;
    }
  }
}

console.log(isPrimeNumber(33));

let name = "what the hell bro?";
console.log(name.splice());
/* 
// JavaScript Program to convert decimal number to
// roman numerals */
function printRoman(number) {
  let num = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000];
  let sym = [
    "I",
    "IV",
    "V",
    "IX",
    "X",
    "XL",
    "L",
    "XC",
    "C",
    "CD",
    "D",
    "CM",
    "M",
  ];
  let i = 12;
  while (number > 0) {
    let div = Math.floor(number / num[i]);
    number = number % num[i];
    while (div--) {
      document.write(sym[i]);
    }
    i--;
  }
}

//Driver program

let number = 3549;

printRoman(number);

//This code is contributed by Manoj
