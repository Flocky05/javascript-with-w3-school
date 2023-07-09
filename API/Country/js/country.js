function loadCountries() {
  url = "https://restcountries.com/v3.1/all";
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayCountries(data));
}
const displayCountries = (countries) => {
  const countryContainer = document.getElementById("countries-container");
  for (const country of countries) {
    //console.log(country);
    const countryInfo = document.createElement("div");
    countryInfo.classList.add("country");
    countryInfo.innerHTML = `
    <h3>Country Name:${country.name.common}<h3>
    <p>Capital :${country.capital ? country.capital[0] : "No Capital"}<p>
    <button onclick="loadCountryDetails('${country.cca2}')">
        detail
    </button>
    `;
    countryContainer.appendChild(countryInfo);
  }
};
loadCountries();

const loadCountryDetails = (code) => {
  //https://restcountries.com/v3.1/alpha/{code}
  url = `https://restcountries.com/v3.1/alpha/${code}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => countryDetal(data[0]));
};

const countryDetal = (country) => {
  console.log(country.languages);
  const detailsCountry = document.getElementById("country-details");
  detailsCountry.innerHTML = `
  <div>
                flge: <img src="${country.flags.png}" alt="">
            </div>
            <h5>Country population:${country.population}</h5>
            <h5>Country startOfWeek: ${country.startOfWeek}</h5>
  `;
};
