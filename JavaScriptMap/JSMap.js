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

/*
JavaScript Objects vs Maps
Differences between JavaScript Objects and Maps:
Object                                  	Map
Not directly iterable	                    Directly iterable
Do not have a size property             	Have a size property
Keys must be Strings (or Symbols)       	Keys can be any datatype
Keys are not well ordered	                Keys are ordered by insertion
Have default keys	                        Do not have default keys
/*
/*
Map.forEach()
The forEach() method invokes a callback for each key/value pair in a Map:
*/
let text = "";
fruits.forEach(function (value, key) {
  text += key + " = " + value;
});
console.log(text);
