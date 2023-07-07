function loadData() {
  const url = "https://jsonplaceholder.typicode.com/posts";
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayData(data));
}
loadData();
function displayData(posts) {
  const postContainer = document.getElementById("posts-container");
  for (const post of posts) {
    const postDiv = document.createElement("div");
    postDiv.classList.add("post");
    console.log(post);
    postDiv.innerHTML = `
            <p>userId:${post.userId}</p>
            <p>title:${post.title}</p>
            <p>body:${post.body}</p>
    `;
    postContainer.appendChild(postDiv);
  }
}

function createApost() {
  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify({
      title: "foo",
      body: "bar",
      userId: 1,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((json) => console.log(json));
}
