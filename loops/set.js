// A javaScript Set is a collection of unique values. each value can only occur once in a Set;

// must be use Set

const letters = new Set(["mehedi", "emon", "siam"]);
console.log(letters);
letters.add("krishno");
letters.add("MOni");
letters.add("AL amin");
console.log(letters);
letters.delete("MOni");
console.log(letters);
