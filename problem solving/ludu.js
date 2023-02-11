// In ludu game how to show a (1-6)?

// let x = parseInt(6 * Math.random());
// if (x < 1) {
//   console.log(1);
// } else console.log(x);

// using function

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(getRandomNumber(1, 6));
