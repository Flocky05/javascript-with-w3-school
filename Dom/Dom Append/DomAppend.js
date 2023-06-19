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
li4.style.color = "Blue";
ul.appendChild(li4);
const li5 = document.createElement("li");
li5.innerText = " Routi";
ul.appendChild(li5);

section.appendChild(ul);
mainSection.appendChild(section);

//Other way added section that is using HTML

const sectionDress = document.createElement("section");
sectionDress.innerHTML = `
                    <h2>The Dress of Bangladesh</h2>
                        <ul id="dress-list">
                            <li>Shart</li>
                            <li>Pant</li>
                            <li>Lungi</li>
                            <li>Sari</li>
                            <li>Panjabi</li>
                            <li>Orna</li>
                        </ul>`;
sectionDress.style.color = "red";
sectionDress.style.border = "20px";
sectionDress.style.borderRadius = "10px";
sectionDress.style.padding = "10px";
sectionDress.style.backgroundColor = "lightblue";

mainSection.appendChild(sectionDress);

const sectionLocation = document.createElement("section");
sectionLocation.innerHTML = `
<h2>Some location of Bangladesh that you have to visit</h2>
            <ul>
                <li>Cox Bazar</li>
                <li>BandarBan</li>
                <li>Sentmartin</li>
                <li>SundarBan</li>
                <li>Sylhet</li>
            </ul>
`;
mainSection.appendChild(sectionLocation);
