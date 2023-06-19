const fruitesName = document.getElementById("fruits-list");
const li = document.createElement("li");
li.innerText = "Litchi";
fruitesName.appendChild(li);
const li1 = document.createElement("li");
li1.innerText = "plum";
fruitesName.appendChild(li1);

const mainSection = document.getElementById("category");
const section = document.createElement("section");
const h1 = document.createElement("h1");
h1.innerText = "List of Top Bangladeshi Food";
section.appendChild(h1);

//create ul
const ul = document.createElement("ul");
const li2 = document.createElement("li");
li2.innerText = "Biriyani";
ul.appendChild(li2);
const li3 = document.createElement("li");
li3.innerText = "Kachchi Biryani ";
ul.appendChild(li3);
const li4 = document.createElement("li");
li4.innerText = "Morog Polao";
ul.appendChild(li4);
const li5 = document.createElement("li");
li5.innerText = " Routi";
ul.appendChild(li5);

section.appendChild(ul);
mainSection.appendChild(section);
