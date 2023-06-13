/*
Adding a Property to a Constructor
You cannot add a new property to an object constructor the same way you add a new property to an existing object:
*/
Person.nationality = "English";

// To add a new property to a constructor, you must add it to the constructor function:
function Person(first, last, age, eyecolor) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eyecolor;
  this.nationality = "English";
}
