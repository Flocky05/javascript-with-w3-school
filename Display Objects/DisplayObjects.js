/*
How to Display JavaScript Objects?
Displaying a JavaScript object will output [object Object].
*/
const person = {
  name: "John",
  age: 30,
  city: "New York",
};

document.getElementById("demo").innerHTML = person;

/*
Displaying Object Properties
The properties of an object can be displayed as a string:
*/
const person1 = {
  name: "John",
  age: 30,
  city: "New York",
};

document.getElementById("demo").innerHTML =
  person1.name + "," + person1.age + "," + person1.city;

/*
  Displaying the Object in a Loop
The properties of an object can be collected in a loop:
*/
const person3 = {
  name: "John",
  age: 30,
  city: "New York",
};

let txt = "";
for (let x in person3) {
  txt += person3[x] + " ";
}

document.getElementById("demo").innerHTML = txt;

/*
Using Object.values()
Any JavaScript object can be converted to an array using Object.values():
*/
const person4 = {
  name: "John",
  age: 30,
  city: "New York",
};

const myArray5 = Object.values(person4);

// added more example
const person5 = {
  name: "John",
  age: 30,
  city: "New York",
};

const myArray = Object.values(person5);
document.getElementById("demo").innerHTML = myArray;
