const loadCountries = () => { fetch('https://restcountries.eu/rest/v2/all')
.then(res => res.json())
.then(data => displayCountry(data))
}
loadCountries();

const displayCountry = countries => {
    const countriesDiv = document.getElementById('countries');
    countries.forEach(country => {
        const div = document.createElement('div');
        div.classList.add('country');
        div.innerHTML = `
        <h3>Country Name: ${country.name}</h3>
        <p>Country Capital: ${country.capital}</p>
        <button onclick="loadCountryByName('${country.name}')">Details</button>
        `;
        countriesDiv.appendChild(div)
    })
}

const loadCountryByName = name => {
    const url = `https://restcountries.eu/rest/v2/name/${name}`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayCountryDetails(data[0]))
}

const displayCountryDetails = country => {
    console.log(country);
    const countryDiv = document.getElementById('country-details');
    countryDiv.innerHTML = `
        <h2>${country.name}</h2>
        <p>Population: ${country.population}</p>
        <img width="200px" src="${country.flag}">
    `;
}