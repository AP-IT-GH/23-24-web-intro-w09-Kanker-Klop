let map = L.map('apMap').setView([51.23009, 4.41616], 17);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([51.23009, 4.41616]).addTo(map)
    .bindPopup('AP-Hogeschool<br> Ellermanstraat 33')
    .openPopup();

var bounds = [[51.23041, 4.4155], [51.22991, 4.41675]];

// create an orange rectangle
L.rectangle(bounds, {color: "#ff0000", weight: 1}).addTo(map);
    
// zoom the map to the rectangle bounds
map.fitBounds(bounds);


// bepaal de rechthoek rondom het gebouw van AP

// kleur de rechthoek in met de rode AP-kleur

// plaats een marker met als tekst "AP-Hogeschool" en eronder "Ellermanstraat 33"
