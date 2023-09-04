/*Each of word in a sentence will be reverse */

function reverseWords(str) {
  let reverseWordArr = str
    .split(" ")
    .map((word) => word.split("").reverse().join(""));
  return reverseWordArr.join(" ");
}
let str = "my name is rakibul islam";
console.log(reverseWords(str));

/* make a word frist letter is uper case and other letters are lower case */
let friends = [
  "mehDi",
  "EmoN",
  "siAm",
  "krishno",
  "shanTo",
  "Akash",
  "sonGLap",
  "PuloK",
];
for (let i = 0; i < friends.length; i++) {
  let friend = friends[i].toLowerCase();
  let FristLetter = friend.slice(0, 1).toUpperCase();
  let FullName = FristLetter + friend.slice(1, friend.length);
  console.log(FullName);
}
