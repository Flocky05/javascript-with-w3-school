function loadData() {
  const url = "https://jsonplaceholder.typicode.com/users";
  fetch(url)
    .then((Response) => Response.json())
    .then((data) => displayUsers(data));
}

function loadData2() {
  const url = "https://jsonplaceholder.typicode.com/todos";
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayTypicode(data));
}

function displayUsers(data) {
  const ul = document.getElementById("user-list");
  for (const user of data) {
    const li = document.createElement("li");
    li.innerText = user.email;
    ul.appendChild(li);
  }
}

function displayTypicode(data) {
  for (const typicode of data) {
    console.log(typicode.title);
  }
}
