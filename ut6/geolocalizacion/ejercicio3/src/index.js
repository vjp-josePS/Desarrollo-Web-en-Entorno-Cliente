import L from 'leaflet';
import './style.css';
import bares from '../bares.json';

// Crear mapa centrado en Cáceres
const map = L.map('map').setView([39.4753, -6.3724], 14);

// Añadir capa de OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Procesar y añadir marcadores para cada bar
bares.results.bindings.forEach(bar => {
    const lat = parseFloat(bar.geo_lat.value);
    const lng = parseFloat(bar.geo_long.value);
    const nombre = bar.rdfs_label.value;
    const telefono = bar.schema_telephone ? bar.schema_telephone.value : 'No disponible';
    const sirveComida = bar.om_sirveComida.value;
    const direccion = bar.schema_address_streetAddress.value;

    const marker = L.marker([lat, lng]).addTo(map);
    marker.bindPopup(`
        <h3>${nombre}</h3>
        
        <p><strong>Teléfono:</strong> ${telefono}</p>
        <p><strong>Sirve comida:</strong> ${sirveComida}</p>
    `);
});
