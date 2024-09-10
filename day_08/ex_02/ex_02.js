var map = L.map('map').setView([46.603354, 1.888334], 6);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

var schools = [
    { city: "Paris", coords: [48.8566, 2.3522] },
    { city: "Lyon", coords: [45.7640, 4.8357] },
    { city: "Bordeaux", coords: [44.8378, -0.5792] }
];

var epitechIcon = L.icon({
    iconUrl: 'https://www.pngkit.com/png/detail/459-4596239_epitech-epitech-logo-transparent.png',
    iconSize: [38, 50],
    iconAnchor: [19, 50],
    popupAnchor: [0, -50]
});

schools.forEach(function (school) {
    L.marker(school.coords, { icon: epitechIcon })
        .addTo(map)
        .bindPopup(school.city + ' rocks!')
        .bindTooltip(school.city, { permanent: true })
});