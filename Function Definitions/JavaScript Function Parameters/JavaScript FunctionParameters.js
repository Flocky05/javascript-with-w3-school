/*
A JavaScript function does not perform any checking on parameter values (arguments).

Function Parameters and Arguments
Earlier in this tutorial, you learned that functions can have parameters:

function functionName(parameter1, parameter2, parameter3) {
  // code to be executed
}
Parameter Rules
JavaScript function definitions do not specify data types for parameters.

JavaScript functions do not perform type checking on the passed arguments.

JavaScript functions do not check the number of arguments received.

Default Parameters
If a function is called with missing arguments (less than declared), the missing values are set to undefined.

Sometimes this is acceptable, but sometimes it is better to assign a default value to the parameter:
*/
function myFunction(x, y) {
  if (y === undefined) {
    y = 2;
  }
}
