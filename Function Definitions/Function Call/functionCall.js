/*
All Functions are Methods
In JavaScript all functions are object methods.

If a function is not a method of a JavaScript object, it is a function of the global object (see previous chapter).

The example below creates an object with 3 properties, firstName, lastName, fullName.
*/
const person = {
  firstName: "John",
  lastName: "Doe",
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};

// This will return "John Doe":
person.fullName();

/*
The JavaScript call() Method
The call() method is a predefined JavaScript method.

It can be used to invoke (call) a method with an owner object as an argument (parameter).

With call(), an object can use a method belonging to another object.
*/

const personX = {
  fullName: function () {
    return this.fristName + " " + this.lastName;
  },
};
const person1 = {
  fristName: "Rakibul",
  lastName: "Islam",
};
const person2 = {
  fristName: "Sakib Al",
  lastName: "Hasan",
};
console.log(personX.fullName.call(person2));
