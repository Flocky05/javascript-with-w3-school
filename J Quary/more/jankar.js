/* Harry’s mom gave him money and asked him to buy some oranges and apples. Write a program to
help Harry calculate how much money the shopkeeper will return.
Input:
The first line of the input is the taka Harry’s mom gave him.
The second line is the cost of 1 kg of oranges and 1 kg of apples.

 */
let x = 1000;
let y = 400;
let z = 300;
let r = x - (y + z);
console.log(r);

/* Write a program to calculate the average marks of Mathematics, Biology, Chemistry, Physics, and
Bangla of a student.
Input:
The first line of the input is the marks of the five subjects mentioned above, respectively. */
let math = 75.25;
let bio = 65;
let chem = 80;
let phy = 35.45;
let bangla = 99.5;

let avg;
avg = (math + bio + chem + phy + bangla) / 5;
console.log(avg.toFixed(2));

/* John’s teacher gave him two variables. Each variable contains a string. John’s teacher asked him to
combine these two strings and print them in one line. Help John write the program.
Input:
The first and the second lines of the input contain the strings. */

let line1 = "I am going to be ";
let line2 = "an awesome web developer";
const lineAdd = line1 + line2;
console.log(lineAdd);

/* Sarah’s mother is teaching her mathematics. She gave Sarah a number and asked her what the
remainder would be if she divided the number by 5. Help Sarah write the program.
Input:
The first line of the input contains the number. */

let number1 = 119;
let divider = 5;
let remainders = number1 % divider;
console.log(remainders);

/* You are given an array:

var fruits = ['Apple', 'Banana', 'Orange'];

a) Find the index of ‘Banana’ and replace ‘Banana’ with ‘Mango’.
b) Remove ‘Orange’ and add ‘Watermelon’. */

let fruits = ["Apple", "Banana", "Orange"];
const numberBanana = fruits.indexOf("Banana");
console.log(numberBanana);

if (numberBanana != -1) {
  fruits[numberBanana] = "mango";
}
console.log(fruits);

fruits.pop();
console.log(fruits);
fruits.push("Watermelon");
console.log(fruits);

/* 
You and your friends Tom, Jane, Peter and John got their final exam results. Your total
score is 85, Tom’s total score is 66, Jane’s total score is 95, Peter’s total score is 56
and John’s total score is 40. The grading chart is
80 or above A grade
60 or above B grade
50 or above C grade
40 or above D grade
39 or less => F grade
*/
let numbers = 56;

if (numbers > 80) {
  console.log("You got A grade");
} else if (numbers > 60) {
  console.log("You got B grade");
} else if (numbers > 50) {
  console.log("You got C grade");
} else if (numbers > 40) {
  console.log("You got D grade");
} else if (numbers <= 39) {
  console.log("Sorry you are failed");
}

/* 1. You are given three numbers 13, 79, and 45. Write a program that will print the
largest number using if-else. */

let numbers1 = 13;
let numbers2 = 79;
let numbers3 = 45;

if (numbers1 > numbers2 && numbers1 > numbers3) {
  console.log("Large number is", numbers1);
} else if (numbers2 > numbers1 && numbers2 > numbers3) {
  console.log("Large number is", numbers2);
} else {
  console.log("The large number is", numbers3);
}

/* You are given a triangle with the sides 9, 8, 9. Write a program to check whether a
triangle is Isosceles or not using if-else.
Isosceles => two sides are equal
*/

let side1 = 9;
let side2 = 7;
let side3 = 7;
if (side1 == side2 || side2 == side3 || side1 == side3) {
  console.log("Yes, This triangle is Isosceles");
} else {
  console.log("No, This triangle is not Isosceles");
}
