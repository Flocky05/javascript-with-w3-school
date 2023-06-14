/*
All JavaScript objects inherit properties and methods from a prototype.

In the previous chapter we learned how to use an object constructor:
*/
function Person(first, last, age, eyecolor) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eyecolor;
}

const myFather = new Person("John", "Doe", 50, "blue");
const myMother = new Person("Sally", "Rally", 48, "green");
