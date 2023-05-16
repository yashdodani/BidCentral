/* eslint-disable */

// console.log('hello from the client side');

const locations = JSON.parse(document.getElementById('map').dataset.locations);

console.log(locations);

var map = L.map('map').setView([51.505, -0.09], 13);

console.log(L);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

// L.marker([51.5, -0.09])
//   .addTo(map)
//   .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
//   .openPopup();

// const locations = JSON.parse(document.getElementById('map').dataset.locations);

// var map = L.map('map', { zoomControl: false });

// L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
//   attribution:
//     '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
// }).addTo(map);

// const points = [];
// locations.forEach((loc) => {
//   points.push([loc.coordinates[1], loc.coordinates[0]]);
//   L.marker([loc.coordinates[1], loc.coordinates[0]])
//     .addTo(map)
//     .bindPopup(`<p>Day ${loc.day}: ${loc.description}</p>`, {
//       autoClose: false,
//     })
//     .openPopup();
// });

// const bounds = L.latLngBounds(points).pad(0.5);
// map.fitBounds(bounds);

// map.scrollWheelZoom.disable();
