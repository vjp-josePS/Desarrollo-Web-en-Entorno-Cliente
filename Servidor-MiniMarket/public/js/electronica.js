import { Carrito } from './carrito.js';

document.addEventListener('DOMContentLoaded', async () => {
    console.log('Iniciando carga de productos...');
    await cargarProductosElectronica();
    await Carrito.actualizarCabeceraCarrito();
});

async function cargarProductosElectronica() {
    try {
        const response = await fetch('http://localhost:3000/electronica', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        });
        
        console.log('Estado de la respuesta:', response.status);
        const contentType = response.headers.get('content-type');
        console.log('Tipo de contenido:', contentType);

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const productos = await response.json();
        console.log('Productos cargados:', productos);

        mostrarProductos(productos);

    } catch (error) {
        console.error('Error al cargar productos:', error);
        mostrarError(error.message);
    }
}

function mostrarProductos(productos) {
    const contenedor = document.getElementById('productos-electronica');
    if (!contenedor) {
        console.error('No se encontró el contenedor de productos');
        return;
    }

    contenedor.innerHTML = '';

    if (!productos || productos.length === 0) {
        contenedor.innerHTML = '<p>No hay productos disponibles</p>';
        return;
    }

    productos.forEach(producto => {
        contenedor.innerHTML += crearDivProducto(producto);
    });
}

function crearDivProducto(producto) {
    return `
        <div class="producto-card">
            <img src="${producto.foto}" 
                 alt="${producto.titulo}"
                 onerror="this.onerror=null; this.src='https://via.placeholder.com/300x200?text=Producto'">
            <h3>${producto.titulo}</h3>
            <div class="producto-info">
                <p class="descripcion">${producto.descripcion}</p>
                <p class="precio">${producto.precio}€</p>
                <button onclick="agregarAlCarrito(${producto.id})" class="btn-comprar">Comprar</button>
            </div>
        </div>
    `;
}

function mostrarError(mensaje) {
    const contenedor = document.getElementById('productos-electronica');
    contenedor.innerHTML = `
        <div class="error-mensaje">
            <p>Error al cargar los productos</p>
            <p>Detalles: ${mensaje}</p>
            <p>Por favor, verifica:</p>
            <ul>
                <li>Que el servidor JSON está corriendo (npm start)</li>
                <li>Que puedes acceder a http://localhost:3001/electronica en tu navegador</li>
            </ul>
        </div>
    `;
}

window.agregarAlCarrito = async function(idProducto) {
    try {
        const response = await fetch(`http://localhost:3000/electronica/${idProducto}`);
        if (!response.ok) throw new Error('Producto no encontrado');
        const producto = await response.json();
        await Carrito.anadirProductoCarrito(producto);
    } catch (error) {
        console.error('Error:', error);
        alert('Error al añadir el producto al carrito');
    }
};
