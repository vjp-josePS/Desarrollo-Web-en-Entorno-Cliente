document.addEventListener("DOMContentLoaded", function() {
    // Coordenadas de Plasencia
    const plasenciaLat = 40.0312;
    const plasenciaLon = -6.0884;

    // Inicializar el mapa
    var map = L.map('map').setView([plasenciaLat, plasenciaLon], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
    }).addTo(map);

    // Crear el icono personalizado
    var customIcon = L.icon({
        iconUrl: 'https://cdn-icons-png.flaticon.com/512/4519/4519729.png',
        iconSize: [32, 32],
        iconAnchor: [16, 32]
    });

    var marker = L.marker([plasenciaLat, plasenciaLon], {icon: customIcon})
        .addTo(map)
        .bindPopup('<img src="https://cdn-icons-png.flaticon.com/512/4519/4519729.png" width="100">')
        .openPopup();
});