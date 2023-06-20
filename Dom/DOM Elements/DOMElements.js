/*
Finding HTML Elements
Often, with JavaScript, you want to manipulate HTML elements.

To do so, you have to find the elements first. There are several ways to do this:

Finding HTML elements by id
Finding HTML elements by tag name
Finding HTML elements by class name
Finding HTML elements by CSS selectors
Finding HTML elements by HTML object collections
Finding HTML Element by Id
The easiest way to find an HTML element in the DOM, is by using the element id.

This example finds the element with id="intro":
*/
// const element = document.getElementById("intro");

// make red background
function makeRed() {
  document.body.style.background = "red";
}
// make background parpole
const makePurple = document.getElementById("clicked-purple");
makePurple.onclick = function () {
  document.body.style.background = "purple";
};

// Make Background Pink color using addEventLister('click',functionName)
const makePink = document.getElementById("make-pink");
makePink.addEventListener("click", make_pink);
function make_pink() {
  document.body.style.background = "pink";
}
