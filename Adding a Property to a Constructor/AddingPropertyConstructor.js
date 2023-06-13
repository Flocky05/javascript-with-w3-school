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

/*
Adding a Method to a Constructor
Your constructor function can also define methods:
*/
function Person1(first, last, age, eyecolor) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eyecolor;
  this.name = function () {
    return this.firstName + " " + this.lastName;
  };
}

/*
You cannot add a new method to an object constructor the same way you add a new method to an existing object.

Adding methods to an object constructor must be done inside the constructor function:
*/
function Person2(firstName, lastName, age, eyeColor) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.eyeColor = eyeColor;
  this.changeName = function (name) {
    this.lastName = name;
  };
}

/*
Built-in JavaScript Constructors
JavaScript has built-in constructors for native objects:
*/
new String(); // A new String object
new Number(); // A new Number object
new Boolean(); // A new Boolean object
new Object(); // A new Object object
new Array(); // A new Array object
new RegExp(); // A new RegExp object
new Function(); // A new Function object
new Date(); // A new Date object
