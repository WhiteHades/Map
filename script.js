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

navigator.geolocation.getCurrentPosition(
  location => {
    const { latitude } = location.coords;
    const { longitude } = location.coords;
    const coords = [latitude, longitude];
    console.log(coords);
    console.log('ffsfs');
    const map = L.map('map', {
      previewCanvas: true,
    }).setView(coords, 13);

    L.tileLayer('https://tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    map.on('click', mapEvent => {
      const { lat, lng } = mapEvent.latlng;

      L.marker([lat, lng]).addTo(map).bindPopup(L.popup({})).openPopup();
    });
  },
  () => {
    alert('Could not get your location');
  }
);
