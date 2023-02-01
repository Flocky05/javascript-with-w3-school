// length of string
const text = "rakibulIslam";
console.log(text.length);

//some time we have to need " " in side the string that time we can use before the " " use \ like:

const sentence = 'I like to  go "Dhaka" any time';
console.log(sentence, sentence.length);

// some time in string we compare two more object with (==) or (===) all time output will be flase

// let x = new String("rakibul");
// let y = new String("rakibul");

// console.log(x == y);
// console.log(x === y);

// // an object and a string can be compare
// let m = "rakibul";
// let n = new String("rakibul");
// console.log(m == n);
// console.log(m === n);

// JS String Methods
// String slice(start,end), String substring(),String substr(),String replace(), String replaceAll(), String toUpperCase(), String toLowerCase(), String concat(), String trim(), String trimStart(), String trimEnd(), String padStart(), String padEnd(), String charAt() etc

// use of slice method is slice(start,end)
let friends = "mehedi,emon,siam,krishno,kauch,shanto";
console.log(friends.slice(3, 17));
//  if you use only one parameter that like as output will be like slice(0, end)

console.log(friends.slice(7));
