// At frist if try to use Object in javascript , You have to know about the rules of Object in js. Object like a function but not like a function. A object have / has some parameeter, which is used like a variable. Normaly we start a type of data then use name then= + { each of variable : data} ,

const car = {
  name: "BMW",
  model: "500",
  weight: "850 kg",
  color: "white",
};

// console.log(car.name, car.model);

//  we can also use insite the object a function.

const friend = {
  name: "Mehedi",
  class: "12",
  weight: "54 kg",
  roll: "01",
  work: function () {
    console.log(
      "He is a hard worker person, who try to see himself as frist boy"
    );
  },
};
// friend.work();

// Insite of Object we can use "this" when normaly used vabiable name, like
const person = {
  firstName: "John",
  lastName: "Doe",
  id: 5566,
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};

console.log(person.fullName());
