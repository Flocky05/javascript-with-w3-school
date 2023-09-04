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
