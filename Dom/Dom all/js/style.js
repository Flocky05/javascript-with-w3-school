document.getElementById("bg-color").addEventListener("click", function () {
  const friends = document.getElementsByClassName("friend");
  for (const friend of friends) {
    friend.style.color = "white";
    friend.style.background = "skyblue";
  }
});
