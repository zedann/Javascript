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
// const getNeighbour = function (data) {
//   const [, neighbour] = data[0].borders;
//   if (!neighbour) return;
//   return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`);
// };
// // const renderNeighbour = function (data) {
// //   renderCountry(data[0], 'neighbour');
// //   return getNeighbour(data);
// // };
// const getCountryData = function (country) {
//   fetch(`https://restcountries.com/v3.1/name/${country}`)
//     .then(response => response.json())
//     .then(data => {
//       renderCountry(data[0]);
//       const neighbour = data[0].borders[0];
//       if (neighbour === 'ISR') neighbour = data[0].borders[1];
//       if (!neighbour) return;
//       return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`);
//     })
//     .catch(err => console.log(err));
// };
// // challenge #1

// const whereAmi = function (lat, lng) {
//   console.log(`https://geocode.xyz/${lat},${lng}?geoit=json`);
//   fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
//     .then(response => {
//       if (!response.ok) throw new Error('Wronge position');
//       return response.json();
//     })
//     .then(data => {
//       console.log(data);
//       console.log(`You are in ${data.city}, ${data.prov}`);
//       return fetch(`https://restcountries.com/v3.1/alpha/${data.prov}`);
//     })
//     .then(response => {
//       if (!response.ok) throw new Error('Country not found');
//       response.json();
//     })
//     .then(data => {
//       renderCountry(data[0]);
//     })
//     .catch(err => {
//       alert(err.message + '🙀');
//     });
// };

// whereAmi(52.508, 13.381);
// // whereAmi(-33.933, 18.474);

// console.log('test start'); //1
// setTimeout(() => {
//   console.log('0 sec timer');
// }, 0); //4
// Promise.resolve('Resolved promise 1')
// .then(res => console.log(res)); //3
// console.log('test end'); //2

//build promise

// const lotteryPromise = new Promise(function (resolve, reject) {
//   if (Math.random() >= 0.5) resolve('You Win 🫡'); //in then
//   else reject('You Lost 😞'); //in catch

// });

// lotteryPromise.then(res => console.log(res)).catch(err => console.error(err));

const getPosition = function () {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};
// getPosition().then(res => console.log(res));
const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};
//challenge #2

const imgContainer = document.querySelector('.images');
// const createImage = function (imgPath) {
//   return new Promise(function (resolve, reject) {
//     const img = document.createElement('img');
//     img.src = imgPath;
//     img.addEventListener('load', function () {
//       imageContainer.append(img);
//       resolve(img);
//     });
//     img.addEventListener('error', function () {
//       reject(new Error('img not found'));
//     });
//   });
// };
// let currentImg;
// createImage('img/img-1.jpg')
//   .then(img => {
//     currentImg = img;
//     console.log('img1 loaded');
//     return wait(2);
//   })
//   .then(() => {
//     currentImg.style.display = 'none';
//     return createImage('img/img-2.jpg');
//   })
//   .then(img => {
//     currentImg = img;
//     console.log('img2 loaded');
//     return wait(2);
//   })
//   .then(() => {
//     currentImg.style.display = 'none';
//     return createImage('img/img-3.jpg');
//   })
//   .then(img => {
//     currentImg = img;
//     console.log('img3 loaded');
//     return wait(2);
//   })
//   .then(() => {
//     currentImg.style.display = 'none';
//   })
//   .catch(console.error(err));
// const whereAmi = async function (country) {
//   try {
//     const {
//       coords: { latitude: lat, longitude: lng },
//     } = await getPosition();
//     const geoRes = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
//     if (!geoRes.ok) throw new Error('problem getting location data');
//     const location = await geoRes.json();
//     console.log(location);
//     const res = await fetch(`https://restcountries.com/v3.1/name/${country}`);
//     if (!res.ok) throw new Error('country not found');
//     const data = await res.json();
//     renderCountry(data[0]);
//   } catch (err) {
//     alert(err.message);
//   }
// };
// whereAmi('egypt');
// const getJson = async function (url, errorMsg = 'something went wrong') {
//   try {
//     const res = await fetch(url);
//     if (!res.ok) throw new Error(errorMsg);
//     const json = await res.json();
//     return json;
//   } catch (error) {
//     return new Error(errorMsg);
//   }
// };
// const get3Countries = async function (c1, c2, c3) {
//   try {
//     // const [data1] = await getJson(`https://restcountries.com/v3.1/name/${c1}`);
//     // const [data2] = await getJson(`https://restcountries.com/v3.1/name/${c2}`);
//     // const [data3] = await getJson(`https://restcountries.com/v3.1/name/${c3}`);
//     const p1 = getJson(`https://restcountries.com/v3.1/name/${c1}`);
//     const p2 = getJson(`https://restcountries.com/v3.1/name/${c2}`);
//     const p3 = getJson(`https://restcountries.com/v3.1/name/${c3}`);
//     console.log(p1, p2, p3);
//     const data = await Promise.all([p1, p2, p3]); //if one reject all reject
//     console.log(data.map(d => d[0].capital[0]));
//   } catch (error) {
//     console.error(error);
//   }
// };
// const countries = ['egypt', 'morocco', 'spain'];
// get3Countries(...countries);

// Promise.allSettled([
//   Promise.reject('error'),
//   Promise.resolve('success1'),
//   Promise.resolve('success2'),
// ])
//   .then(res => console.log(res))
//   .catch(err => console.error(err));
// const createImage = function (imgPath) {
//   return new Promise(function (resolve, reject) {
//     const img = document.createElement('img');
//     img.src = imgPath;
//     img.addEventListener('load', function () {
//       imageContainer.append(img);
//       resolve(img);
//     });
//     img.addEventListener('error', function () {
//       reject(new Error('img not found'));
//     });
//   });
// };
// const loadNpause = async function (imgPath) {
//   try {
//     const img = document.createElement('img');
//     img.src = imgPath;
//     imageContainer.append(img);
//     return img;
//   } catch (error) {
//     return new Error(error.message);
//   }
// };
// loadNpause('img/img-1.jpg');

const createImage = function (imgPath) {
  return new Promise(function (resolve, reject) {
    const img = document.createElement('img');
    img.src = imgPath;

    img.addEventListener('load', function () {
      imgContainer.append(img);
      resolve(img);
    });

    img.addEventListener('error', function () {
      reject(new Error('Image not found'));
    });
  });
};

let currentImg;

// createImage('img/img-1.jpg')
//   .then(img => {
//     currentImg = img;
//     console.log('Image 1 loaded');
//     return wait(2);
//   })
//   .then(() => {
//     currentImg.style.display = 'none';
//     return createImage('img/img-2.jpg');
//   })
//   .then(img => {
//     currentImg = img;
//     console.log('Image 2 loaded');
//     return wait(2);
//   })
//   .then(() => {
//     currentImg.style.display = 'none';
//   })
//   .catch(err => console.error(err));
const imgPaths = ['img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg'];
const loadNpause = async function () {
  try {
    let img = await createImage(imgPaths[0]);
    await wait(2);
    img.style.display = 'none';
    img = await createImage(imgPaths[1]);
    await wait(2);
    img.style.display = 'none';
    img = await createImage(imgPaths[2]);
    await wait(2);
    img.style.display = 'none';
  } catch (error) {
    console.error(error + '🤨');
  }
};
// loadNpause();
const loadAll = async function (imgArr) {
  try {
    const imgs = imgArr.map(async imgPath => await createImage(imgPath));
    const realImgs = await Promise.all(imgs);
    realImgs.forEach(img => {
      img.classList.add('parallel');
    });
  } catch (error) {
    console.error(error);
  }
};
loadAll(imgPaths);
