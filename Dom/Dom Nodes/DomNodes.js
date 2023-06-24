/*
Adding and Removing Nodes (HTML Elements)

Creating New HTML Elements (Nodes)
To add a new element to the HTML DOM, you must create the element (element node) first, and then append it to an existing element.
*/

/*Example Explained 
This code creates a new <p> element:

const para = document.createElement("p");
To add text to the <p> element, you must create a text node first. This code creates a text node:

const node = document.createTextNode("This is a new paragraph.");
Then you must append the text node to the <p> element:

para.appendChild(node);
Finally you must append the new element to an existing element.

This code finds an existing element:

const element = document.getElementById("div1");
This code appends the new element to the existing element:

element.appendChild(para);
*/

/*
Creating new HTML Elements - insertBefore()
The appendChild() method in the previous example, appended the new element as the last child of the parent.

If you don't want that you can use the insertBefore() method:
*/
{
  /* <div id="div1">
  <p id="p1">This is a paragraph.</p>
  <p id="p2">This is another paragraph.</p>
</div>

<script>
const para = document.createElement("p");
const node = document.createTextNode("This is new.");
para.appendChild(node);

const element = document.getElementById("div1");
const child = document.getElementById("p1");
element.insertBefore(para, child);
</script> */
}
