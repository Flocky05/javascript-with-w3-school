// Avoid Global Variables
// Avoid global variables, avoid new, avoid ==, avoid eval()

// Always Declare Local Variables
/*All variables used in a function should be declared as local variables.





/* Local variables must be declared with the var, the let, or the const keyword, otherwise they will become global variables. */

// Declarations on To
/* It is a good coding practice to put all declarations at the top of each script or function.

This will:

Give cleaner code
Provide a single place to look for local variables
Make it easier to avoid unwanted (implied) global variables
Reduce the possibility of unwanted re-declarations
*/

// Declare at the beginning
let firstName, lastName, price, discount, fullPrice;

// Use later
firstName = "John";
lastName = "Doe";

price = 19.9;
discount = 0.1;

fullPrice = price - discount;

// Initialize Variables
/*It is a good coding practice to initialize variables when you declare them.

This will:

Give cleaner code
Provide a single place to initialize variables
Avoid undefined values */
// Declare and initiate at the beginning
let firstName = "";
let lastName = "";
let price = 0;
let discount = 0;
let fullPrice = 0,
const myArray = [];
const myObject = {};

/*Declare Objects with const
Declaring objects with const will prevent any accidental change of type: */
let car = {type:"Fiat", model:"500", color:"white"};
car = "Fiat";      // Changes object to string

/*Declare Arrays with const
Declaring arrays with const will prevent any accidential change of type: */

let cars = ["Saab", "Volvo", "BMW"];
cars = 3;    // Changes array to number


/* Don't Use new Object()
Use "" instead of new String()
Use 0 instead of new Number()
Use false instead of new Boolean()
Use {} instead of new Object()
Use [] instead of new Array()
Use /()/ instead of new RegExp()
Use function (){} instead of new Function()
*/

let x1 = "";             // new primitive string
let x2 = 0;              // new primitive number
let x3 = false;          // new primitive boolean
const x4 = {};           // new object
const x5 = [];           // new array object
const x6 = /()/;         // new regexp object
const x7 = function(){}; // new function object


/* Beware of Automatic Type Conversions
JavaScript is loosely typed.

A variable can contain all data types.

A variable can change its data type:
*/

let x = "Hello";     // typeof x is a string
x = 5;  