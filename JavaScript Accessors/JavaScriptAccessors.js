/*
JavaScript Getter (The get Keyword)
This example uses a lang property to get the value of the language property.
*/
// Create an object:
const person = {
  firstName: "John",
  lastName: "Doe",
  language: "en",
  get lang() {
    return this.language;
  },
};

// Display data from the object using a getter:
document.getElementById("demo").innerHTML = person.lang;

/*
JavaScript Setter (The set Keyword)
This example uses a lang property to set the value of the language property.
*/
const person1 = {
  firstName: "John",
  lastName: "Doe",
  language: "",
  set lang(lang) {
    this.language = lang;
  },
};

// Set an object property using a setter:
person1.lang = "en";

// Display data from the object:
document.getElementById("demo").innerHTML = person1.language;

/*
JavaScript Function or Getter?
What is the differences between these two examples?
*/
const person2 = {
  firstName: "John",
  lastName: "Doe",
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};

// Display data from the object using a method:
document.getElementById("demo").innerHTML = person2.fullName();

/*
Data Quality
JavaScript can secure better data quality when using getters and setters.

Using the lang property, in this example, returns the value of the language property in upper case:
*/
// Create an object:
const person4 = {
  firstName: "John",
  lastName: "Doe",
  language: "en",
  get lang() {
    return this.language.toUpperCase();
  },
};

// Display data from the object using a getter:
document.getElementById("demo").innerHTML = person4.lang;
