'use strict';

// prettier-ignore
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');

////////////////////////////////////////////////////////////////////////////////////////////////////////

class App {
  #map;
  #mapEvent;
  constructor() {
    this._getPosition();
    //events
    form.addEventListener('submit', this._newWorkout.bind(this));
    inputType.addEventListener('change', this._toggleElevationField);
  }
  _getPosition() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        this._loadMap.bind(this),
        function () {
          alert('sorry we can not get your location');
        }
      );
    } else {
      alert('Try to use another Browser');
    }
  }
  _loadMap(position) {
    const { latitude } = position.coords;
    const { longitude } = position.coords;
    console.log(longitude, latitude);
    // const currentPosition = `https://www.google.pt/maps/@${latitude},${longitude}`;
    const coords = [latitude, longitude];
    this.#map = L.map('map').setView(coords, 17);

    L.tileLayer('https://tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(this.#map);

    this.#map.on('click', this._showForm.bind(this));
  }
  _showForm(mapE) {
    this.#mapEvent = mapE;
    //render form
    form.classList.remove('hidden');
    inputDistance.focus();
  }
  _toggleElevationField() {
    inputCadence.closest('.form__row').classList.toggle('form__row--hidden');
    inputElevation.closest('.form__row').classList.toggle('form__row--hidden');
  }
  _newWorkout(e) {
    e.preventDefault();
    const allNumbersInputs = function (...inputs) {
      return inputs.every(function (inp) {
        return Number.isFinite(inp);
      });
    };
    const allPositives = function (...inputs) {
      return inputs.every(function (inp) {
        return inp > 0;
      });
    };
    //display marker
    const type = inputType.value;
    const distance = +inputDistance.value;
    const duration = +inputDuration.value;
    if (type === 'running') {
      const cadence = +inputCadence.value;
      if (
        !allNumbersInputs(distance, duration, cadence) ||
        !allPositives(distance, duration, cadence)
      )
        return alert('Invalid Informations');
    }
    if (type === 'cycling') {
      const elevation = inputElevation.value;
      if (
        !allNumbersInputs(distance, duration, elevation) ||
        !allPositives(distance, duration)
      )
        return alert('Invalid Informations');
    }
    const { lat, lng } = this.#mapEvent.latlng;
    L.marker([lat, lng])
      .addTo(this.#map)
      .bindPopup(
        L.popup({
          maxWidth: 250,
          minWidth: 100,
          autoClose: false,
          closeOnClick: false,
          className: 'running-popup',
        })
      )
      .setPopupContent('workout')
      .openPopup();
  }
}
class Workout {
  date = new Date();
  id = (Date.now() + '').slice(-10);
  constructor(coords, distance, duration) {
    this.distance = distance; //in km
    this.duration = duration; //in min
    this.coords = coords; //[lat ,lng]
  }
}
class Running extends Workout {
  type = 'running';
  constructor(coords, distance, duration, cadence) {
    super(coords, distance, duration);
    this.cadence = cadence;
    this.calcPace();
  }
  calcPace() {
    //min / km
    this.pace = this.duration / this.distance;
    return this.pace;
  }
}
class Cycling extends Workout {
  type = 'cycling';
  constructor(coords, distance, duration, elevationGain) {
    super(distance, duration, coords);
    this.elevationGain = elevationGain;
  }
  calcSpeed() {
    //km/hr
    this.speed = this.distance / this.duration;
    return this.speed;
  }
}
//////////
const app = new App();
