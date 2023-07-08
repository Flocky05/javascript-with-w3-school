function dataLoad() {
  url = "https://api.kanye.rest/";
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayData(data));
}

const displayData = (quote) => {
  const quotetion = document.getElementById("quote");
  quotetion.innerText = quote.quote;
};
