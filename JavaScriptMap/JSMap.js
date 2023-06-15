/*
A Map holds key-value pairs where the keys can be any datatype.

A Map remembers the original insertion order of the keys.

A Map has a property that represents the size of the map.
*/

/*
new Map()
You can create a Map by passing an Array to the new Map() constructor:
*/
const fruits = new Map([
  ["apples", 500],
  ["bananas", 300],
  ["oranges", 200],
]);
console.log(fruits);

/*
Map.get()
The get() method gets the value of a key in a Map:
*/
console.log(fruits.get("apples"));

/*
Map.size
The size property returns the number of elements in a Map:
*/
console.log(fruits.size);

/*
Map.delete()
The delete() method removes a Map element:
*/
console.log(fruits.delete("apples"));
console.log(fruits);

/*
Maps are Objects
typeof returns object:
*/
console.log(typeof fruits);
