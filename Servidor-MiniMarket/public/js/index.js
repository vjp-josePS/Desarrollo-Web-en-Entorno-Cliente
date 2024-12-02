import { Carrito } from './carrito.js';

document.addEventListener('DOMContentLoaded', async () => {
    await cargarProductosDestacados();
    await Carrito.actualizarCabeceraCarrito();
});

window.agregarAlCarrito = async function(idProducto) {
    try {
        // Intentar buscar en las tres categorías
        const categorias = ['electronica', 'muebles', 'decoracion'];
        let producto = null;

        for (const categoria of categorias) {
            try {
                const response = await fetch(`http://localhost:3000/${categoria}/${idProducto}`);
                if (response.ok) {
                    producto = await response.json();
                    break;
                }
            } catch (error) {
                continue;
            }
        }

        if (producto) {
            await Carrito.anadirProductoCarrito(producto);
        } else {
            throw new Error('Producto no encontrado');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('Error al añadir el producto al carrito');
    }
};

async function cargarProductosDestacados() {
    try {
        console.log('Iniciando carga de productos...');
        
        // Cargar las tres categorías con el puerto correcto
        const [electronica, muebles, decoracion] = await Promise.all([
            fetch('http://localhost:3000/electronica').then(res => res.json()),
            fetch('http://localhost:3000/muebles').then(res => res.json()),
            fetch('http://localhost:3000/decoracion').then(res => res.json())
        ]);

        // Combinar todos los productos
        const todosLosProductos = [...electronica, ...muebles, ...decoracion];

        if (todosLosProductos.length === 0) {
            throw new Error('No hay productos disponibles');
        }

        // Seleccionar 3 productos al azar
        const productosDestacados = seleccionarProductosAleatorios(todosLosProductos, 3);

        // Mostrar los productos
        const contenedor = document.getElementById('productos-destacados');
        contenedor.innerHTML = ''; 
        
        productosDestacados.forEach(producto => {
            contenedor.innerHTML += crearDivProducto(producto);
        });

    } catch (error) {
        console.log('Error detallado:', error);
        const contenedor = document.getElementById('productos-destacados');
        contenedor.innerHTML = `
            <div class="error-mensaje">
                <p>Error al cargar los productos.</p>
                <p>Por favor, verifica que el servidor JSON está corriendo en el puerto 3000</p>
                <p>Detalles: ${error.message}</p>
            </div>
        `;
    }
}

function seleccionarProductosAleatorios(productos, cantidad) {
    const seleccionados = [];
    const productosDisponibles = [...productos];
    
    for (let i = 0; i < cantidad && productosDisponibles.length > 0; i++) {
        const indice = Math.floor(Math.random() * productosDisponibles.length);
        seleccionados.push(productosDisponibles.splice(indice, 1)[0]);
    }

    return seleccionados;
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