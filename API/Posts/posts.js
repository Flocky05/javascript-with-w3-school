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
