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
    .then((data) => console.log(data));
}

function displayUsers(data) {
  for (const user of data) {
    console.log(user.name);
    console.log(user.phone);
  }
}
