// why need to use regular exprestion in js? There are some resonse for using regular exprestion is js , like You have to need search rakiBul and that answer will be like any rakibul. But traditionly you find the answer using fixed string but some times we have to need like uperCase and lowerCase letter . That time may you use that

let line = "I am Rakibul Islam";
console.log(line.search(/rakibul/i));

let text =
  "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi quam inventore rerum, ut, illo delectus fuga ab et at aut dignissimos rem. Qui doloremque culpa nemo. Dignissimos iste quidem iusto blanditiis laborum officiis voluptas animi voluptatum corporis non ratione, repudiandae culpa voluptate quas ducimus et repellat hic dolore ex enim quaerat quia repellendus tempora! Quos minus molestias architecto. Repellendus, est.";
console.log(text.search(/quas/i));

// some time we have to need replace the any word So that time you can change the word using replace

let text2 = "I love you";
console.log(text2.replace(/love/i, "hate"));

// golovaly change the value you have to need you ig

console.log(text.replace(/at/gi, "fuck"));
