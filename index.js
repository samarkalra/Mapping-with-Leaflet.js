//Making a map and tiles
const mymap = L.map('issMap').setView([0, 0], 1);
const attribution = '&copy; <a href="https://www.openstreetmap.org/copyright>OpenStreetmap</a> contributors';
const tileUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
const tiles = L.tileLayer(tileUrl, { attribution });
tiles.addTo(mymap);

//Making a marker with a custom icon
const issIcon = L.icon({
    iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/International_Space_Station.svg/128px-International_Space_Station.svg.png',
    iconSize: [128, 81],
    iconAnchor: [25, 16]
});
const marker = L.marker([0, 0], { icon: issIcon }).addTo(mymap);

const api_url = "https://api.wheretheiss.at/v1/satellites/25544";

const getIss = async () => {
    const response = await fetch(api_url);
    const data = await response.json();
    const { latitude, longitude } = data;

    document.getElementById('lat').textContent = latitude;
    document.getElementById('long').textContent = longitude;
    marker.setLatLng([latitude, longitude]);
}

getIss();