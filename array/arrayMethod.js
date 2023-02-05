// some array methods for join methods that methods normally used for join elements of array , you can use all time of things as you like

const fruits = ["Banana", "Orange", "Apple", "Mango"];

console.log(fruits.join("*"));

// Pop methods, delete from the array last elements
fruits.pop();
console.log(fruits);

// added push mehtods that is used for adding element to last

fruits.push("Wood apple");
console.log(fruits);

// shift mehtod that is used for removeing element in the array in frist one

fruits.shift();
console.log(fruits);

// unshift is used for adding element in the array frist side

fruits.unshift("Shifedila");
console.log(fruits);

// array position, some times needs that the position of element :
console.log(fruits[2]);

//If the end argument is omitted, like in the first examples, the slice() method slices out the rest of the array.

const citrus = fruits.slice(2);
console.log(citrus);
