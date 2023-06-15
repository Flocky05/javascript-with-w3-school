x = 10;
console.log(x);
var x;
// here will be rightly show the value of x couse of here is  complete hosting , we know that declaration part will go at frist location. if we decoder the code using hosting
/*
var x;
x=10;
console.log(x)
*/

y = 20;
console.log(y);
let y;
//here will show reference error , couse of when hosting in function that time let will go top of the code than y= undifined not use in this case . then y=20 or any value how to define . so that is known as referenceErro.

//In the same case of const , here will a error that is known as syntax error, couse of cosnt useing declaration and initializetion. it will not possilble
