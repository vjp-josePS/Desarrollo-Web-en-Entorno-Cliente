document.addEventListener("DOMContentLoaded", function() {
    // Coordenadas centrales de Plasencia
    const plasenciaLat = 40.0312;
    const plasenciaLon = -6.0884;

    // Inicializar el mapa
    const map = L.map('map').setView([plasenciaLat, plasenciaLon], 15);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
    }).addTo(map);

    // Ayuntamiento de Plasencia (Marcador)
    L.marker([40.0341, -6.0889]).addTo(map)
        .bindPopup(`
            <h3>Ayuntamiento de Plasencia</h3>
            <p>Edificio histórico sede del gobierno municipal de Plasencia.</p>
            <a href="https://www.plasencia.es" target="_blank">Visitar web oficial</a>
        `);

    // Piscina Bioclimática (Círculo)
    L.circle([40.0305, -6.0814], {
        color: 'blue',
        fillColor: '#30f',
        fillOpacity: 0.5,
        radius: 50
    }).addTo(map)
        .bindPopup(`
            <h3>Piscina Bioclimática</h3>
            <p>Instalación deportiva municipal con tecnología sostenible.</p>
            <a href="https://piscinaplasencia.es" target="_blank">Más información</a>
        `);

    // IES Valle del Jerte (Polígono) - Coordenadas actualizadas
    const iesCoords = [
        [40.0433, -6.0869],
        [40.0435, -6.0864],
        [40.0431, -6.0860],
        [40.0429, -6.0865]
    ];
    
    L.polygon(iesCoords, {
        color: 'red',
        fillColor: '#f03',
        fillOpacity: 0.5
    }).addTo(map)
        .bindPopup(`
            <h3>IES Valle del Jerte</h3>
            <p>Centro educativo de referencia en Plasencia.</p>
            <a href="https://iesvalledeljerteplasencia.es" target="_blank">Web del instituto</a>
        `);

    // Estación de trenes (Polígono)
    const estacionCoords = [
        [40.0271, -6.0847],
        [40.0274, -6.0842],
        [40.0269, -6.0837],
        [40.0266, -6.0842]
    ];

    L.polygon(estacionCoords, {
        color: 'green',
        fillColor: '#3f0',
        fillOpacity: 0.5
    }).addTo(map)
        .bindPopup(`
            <h3>Estación de Trenes</h3>
            <p>Estación ferroviaria de Plasencia.</p>
            <a href="https://www.renfe.com" target="_blank">Horarios y billetes</a>
        `);
});
