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
