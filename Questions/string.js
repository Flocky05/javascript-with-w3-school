/*Each of word in a sentence will be reverse */

function reverseWords(str) {
  let reverseWordArr = str
    .split(" ")
    .map((word) => word.split("").reverse().join(""));
  return reverseWordArr.join(" ");
}
let str = "my name is rakibul islam";
console.log(reverseWords(str));
