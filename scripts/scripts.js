var map = L.map('map').setView([42.3601, -71.0589], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	maxZoom: 18,
}).addTo(map);

var marker = L.marker([42.3432517, -71.1227484]).addTo(map);

marker.bindPopup("<b>Boston General Store</b><br> 305 Harvard St Brookline, MA 02446").openPopup();

/* WRITE YOUR JS HERE... YOU MAY REQUIRE MORE THAN ONE JS FILE. IF SO SAVE IT SEPARATELY IN THE SCRIPTS DIRECTORY */