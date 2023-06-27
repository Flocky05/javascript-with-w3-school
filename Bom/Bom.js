/*
The Browser Object Model (BOM)
There are no official standards for the Browser Object Model (BOM).

Since modern browsers have implemented (almost) the same methods and properties for JavaScript interactivity, it is often referred to, as methods and properties of the BOM.
*/

/*
The Window Object
The window object is supported by all browsers. It represents the browser's window.

All global JavaScript objects, functions, and variables automatically become members of the window object.

Global variables are properties of the window object.

Global functions are methods of the window object.

Even the document object (of the HTML DOM) is a property of the window object:

window.document.getElementById("header");
is the same as:

document.getElementById("header");
*/

/*
Window Size
Two properties can be used to determine the size of the browser window.

Both properties return the sizes in pixels:

window.innerHeight - the inner height of the browser window (in pixels)
window.innerWidth - the inner width of the browser window (in pixels)
The browser window (the browser viewport) is NOT including toolbars and scrollbars.
*/

/*
Other Window Methods
Some other methods:

window.open() - open a new window
window.close() - close the current window
window.moveTo() - move the current window
window.resizeTo() - resize the current window
*/

/*
Window Screen
The window.screen object can be written without the window prefix.

Properties:

screen.width
screen.height
screen.availWidth
screen.availHeight
screen.colorDepth
screen.pixelDepth

*/

/*
Window Screen Width
The screen.width property returns the width of the visitor's screen in pixels.

Example
Display the width of the screen in pixels:

document.getElementById("demo").innerHTML =
"Screen Width: " + screen.width;
*/

/*

Window Screen Height
The screen.height property returns the height of the visitor's screen in pixels.

Example
Display the height of the screen in pixels:

document.getElementById("demo").innerHTML =
"Screen Height: " + screen.height;
*/

/*
Window Screen Available Width
The screen.availWidth property returns the width of the visitor's screen, in pixels, minus interface features like the Windows Taskbar.

Example
Display the available width of the screen in pixels:

document.getElementById("demo").innerHTML =
"Available Screen Width: " + screen.availWidth;
*/
