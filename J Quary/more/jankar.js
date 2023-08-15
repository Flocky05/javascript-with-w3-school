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
