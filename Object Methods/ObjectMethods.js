const person = {
  firstName: "John",
  lastName: "Doe",
  id: 5566,
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};

/*
What is this?
In JavaScript, the this keyword refers to an object.

Which object depends on how this is being invoked (used or called).

The this keyword refers to different objects depending on how it is used:

In an object method, this refers to the object.
Alone, this refers to the global object.
In a function, this refers to the global object.
In a function, in strict mode, this is undefined.
In an event, this refers to the element that received the event.
Methods like call(), apply(), and bind() can refer this to any object.
*/

/*
Accessing Object Methods
You access an object method with the following syntax:

objectName.methodName()
You will typically describe fullName() as a method of the person object, and fullName as a property.

The fullName property will execute (as a function) when it is invoked with ().

This example accesses the fullName() method of a person object:
*/
let name = person.fullName();

/*
Adding a Method to an Object
Adding a new method to an object is easy:
*/
person.name = function () {
  return this.firstName + " " + this.lastName;
};

/*
Using Built-In Methods
This example uses the toUpperCase() method of the String object, to convert a text to uppercase:
*/
let message = "Hello world!";
let x = message.toUpperCase();

person.name = function () {
  return (this.firstName + " " + this.lastName).toUpperCase();
};
