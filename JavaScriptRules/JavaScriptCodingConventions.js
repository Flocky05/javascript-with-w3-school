//JavaScript Coding Conventions
//Variable Names
// At W3schools we use camelCase for identifier names (variables and functions).

// All names start with a letter.

// At the bottom of this page, you will find a wider discussion about naming rules.
firstName = "John";
lastName = "Doe";

price = 19.9;
tax = 0.2;

fullPrice = price + price * tax;

// Spaces Around Operators
/*Always put spaces around operators ( = + - * / ), and after <commas:></commas:*/
let x = y + z;
const myArray = ["Volvo", "Saab", "Fiat"];

// Code Indentation
//Always use 2 spaces for indentation of code blocks:
function toCelsius(fahrenheit) {
  return (5 / 9) * (fahrenheit - 32);
}

// Statement Rules
//Always end a simple statement with a semicolon.
const cars = ["Volvo", "Saab", "Fiat"];

const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue",
};
