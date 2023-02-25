// syntax of error that is normly error handle part here you can use try{} catch(error){} but some time have to need show output like as you like, that time you have to use throw key word

let x = 12;
try {
  if (x == "") throw "empty";
  if (isNaN(x)) throw "Not a number";
  x = Number(x);
  if (x < 5) throw "too low";
  if (x > 10) throw "too low";
} catch (error) {
  console.log(error);
}
console.log("This is one kind of test");
