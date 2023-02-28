// JavaScript Declarations are Hoisted
// In JavaScript, a variable can be declared after it has been used.

// In other words; a variable can be used before it has been declared.
x = 5; // Assign 5 to x

elem = document.getElementById("demo"); // Find an element
elem.innerHTML = x; // Display x in the element

var x; // Declare x

// The let and const Keywords
// Variables defined with let and const are hoisted to the top of the block, but not initialized.

// Meaning: The block of code is aware of the variable, but it cannot be used until it has been declared.

// Using a let variable before it is declared will result in a ReferenceError.

// The variable is in a "temporal dead zone" from the start of the block until it is declared:
