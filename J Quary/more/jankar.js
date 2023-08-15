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

var fruits = ["Apple", "Banana", "Orange"];
console.log(fruits.indexOf("Banana"));
