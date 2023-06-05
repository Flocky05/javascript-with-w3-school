/*
JavaScript Primitives
A primitive value is a value that has no properties or methods.

3.14 is a primitive value

A primitive data type is data that has a primitive value.

JavaScript defines 7 types of primitive data types:

Examples
string
number
boolean
null
undefined
symbol
bigint
*/

/*
Objects are Variables
JavaScript variables can contain single values:
*/
let person = "John Doe";

/*
Using an Object Literal
This is the easiest way to create a JavaScript Object.

Using an object literal, you both define and create an object in one statement.

An object literal is a list of name:value pairs (like age:50) inside curly braces {}.

The following example creates a new JavaScript object with four properties:
*/
const person1 = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue",
};
// Spaces and line breaks are not important. An object definition can span multiple lines:
const person2 = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue",
};

/*
Using the JavaScript Keyword new
The following example create a new JavaScript object using new Object(), and then adds 4 properties:
*/
const person3 = new Object();
person.firstName = "John";
person.lastName = "Doe";
person.age = 50;
person.eyeColor = "blue";
