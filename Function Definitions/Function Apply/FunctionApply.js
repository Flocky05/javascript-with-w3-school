/*
Method Reuse
With the apply() method, you can write a method that can be used on different objects.

The JavaScript apply() Method
The apply() method is similar to the call() method (previous chapter).

In this example the fullName method of person is applied on person1:
*/
const person = {
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};

const person1 = {
  firstName: "Mary",
  lastName: "Doe",
};

// This will return "Mary Doe":
person.fullName.apply(person1);

//The Difference Between call() and apply()
/*
The difference is:

The call() method takes arguments separately.

The apply() method takes arguments as an array.
*/
