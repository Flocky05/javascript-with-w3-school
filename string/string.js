// length of string
const text = "rakibulIslam";
console.log(text.length);

//some time we have to need " " in side the string that time we can use before the " " use \ like:

const sentence = 'I like to  go "Dhaka" any time';
console.log(sentence, sentence.length);

// some time in string we compare two more object with (==) or (===) all time output will be flase

let x = new String("rakibul");
let y = new String("rakibul");

console.log(x == y);
console.log(x === y);
