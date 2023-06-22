/*
JavaScript Form Validation
HTML form validation can be done by JavaScript.

If a form field (fname) is empty, this function alerts a message, and returns false, to prevent the form from being submitted:
*/
function validateForm() {
  let x = document.forms["myForm"]["fname"].value;
  if (x == "") {
    alert("Name must be filled out");
    return false;
  }
}

/*
JavaScript Can Validate Numeric Input
JavaScript is often used to validate numeric input:
 here has a html file that name is domform.html
*/
