// how to decoread your friends name with alfabate

const students = ["mehedi", "rakibul", "emon", "siam", "krishno", "kauch"];

console.log(students.sort());

// roll in a serial
const roll_number = [2, 1, 4, 45, 23, 56, 76];
const x = roll_number.sort(function (a, b) {
  return a - b;
});
console.log(x);

// leap year

function leap_year(year) {
  if (year % 400 == 0 || (year % 100 !== 0 && year % 4 == 0)) {
    console.log(`${year} is leap year`);
  } else console.log(`${year} is not a leap year`);
}

leap_year(2026);
