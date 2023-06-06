/*
JavaScript Properties
Properties are the values associated with a JavaScript object.

A JavaScript object is a collection of unordered properties.

Properties can usually be changed, added, and deleted, but some are read only.
*/
// Accessing JavaScript Properties
objectName.property;
// or
objectName["property"];
// or
objectName[expression];

// may we use them
person.firstname + " is " + person.age + " years old.";

/*
JavaScript for...in Loop
The JavaScript for...in statement loops through the properties of an object.
Syntax
for (let variable in object) {
  // code to be executed
}
*/
const person = {
  fname: " John",
  lname: " Doe",
  age: 25,
};

for (let x in person) {
  txt += person[x];
}
