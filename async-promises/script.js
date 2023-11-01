'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////
// const getCountryData = function (country) {
//   const request = new XMLHttpRequest();
//   request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
//   request.send();
//   request.addEventListener('load', function () {
//     const [data] = JSON.parse(this.responseText);
//     console.log(data);
//     let html = `
//             <article class="country">
//               <img class="country__img" src="${data.flags.png}" />
//               <div class="country__data">
//                 <h3 class="country__name">${data.name.common}</h3>
//                 <h4 class="country__region">${data.region}</h4>
//                 <p class="country__row"><span>👫</span>${(
//                   +data.population / 1e6
//                 ).toFixed(1)} m</p>
//                 <p class="country__row"><span>🗣️</span>${
//                   Object.values(data.languages)[0]
//                 }</p>
//                 <p class="country__row"><span>💰</span>${
//                   Object.values(data.currencies)[0].name
//                 }</p>
//               </div>
//             </article>
//             `;
//     countriesContainer.insertAdjacentHTML('beforeend', html);
//     countriesContainer.style.opacity = 1;
//   });
// };
// getCountryData('egypt');
// getCountryData('palestine');
// getCountryData('jordan');

//promises and fetch api
// const fetchData = async function () {
//   const response = await fetch('https://restcountries.com/v3.1/name/egypt');
//   const data = await response.json();
//   console.log(data);
// };
// fetchData();

const renderCountry = function (data, className = '') {
  let html = `
            <article class="country ${className}">
              <img class="country__img" src="${data.flags.png}" />
              <div class="country__data">
                <h3 class="country__name">${data.name.common}</h3>
                <h4 class="country__region">${data.region}</h4>
                <p class="country__row"><span>👫</span>${(
                  +data.population / 1e6
                ).toFixed(1)} m</p>
                <p class="country__row"><span>🗣️</span>${
                  Object.values(data.languages)[0]
                }</p>
                <p class="country__row"><span>💰</span>${
                  Object.values(data.currencies)[0].name
                }</p>
              </div>
            </article>
            `;
  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};
const getNeighbour = function (data) {
  const [, neighbour] = data[0].borders;
  if (!neighbour) return;
  return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`);
};
// const renderNeighbour = function (data) {
//   renderCountry(data[0], 'neighbour');
//   return getNeighbour(data);
// };
const getCountryData = function (country) {
  const countryData = fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then(response => response.json())
    .then(data => {
      renderCountry(data[0]);
      const neighbour = data[0].borders[0];
      if (neighbour === 'ISR') neighbour = data[0].borders[1];
      if (!neighbour) return;
      return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`);
    });
};
getCountryData('egypt');
