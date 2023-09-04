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
