'use strict';

document.addEventListener('DOMContentLoaded', () => {
    iniciarAplicacion();
});

async function iniciarAplicacion() {
    try {
        await ManejadorDB.abrirDB();
        actualizarTabla();
    } catch (error) {
        console.error('Error al iniciar la aplicación:', error);
    }
}

document.getElementById('productoForm').addEventListener('submit', async function(e) {
    e.preventDefault();
    
    const producto = {
        item: document.getElementById('item').value,
        cantidad: document.getElementById('cantidad').value,
        precioUnidad: document.getElementById('precioUnidad').value,
        marca: document.getElementById('marca').value
    };

    try {
        await ManejadorDB.insertarProducto(producto);
        actualizarTabla();
        this.reset();
    } catch (error) {
        console.error('Error al insertar producto:', error);
    }
});

async function actualizarTabla() {
    try {
        const productos = await ManejadorDB.obtenerTodosLosProductos();
        const tbody = document.getElementById('productosBody');
        tbody.innerHTML = '';
        
        productos.forEach(producto => {
            tbody.innerHTML += Producto.devolverTRProductoDB(producto);
        });
    } catch (error) {
        console.error('Error al actualizar tabla:', error);
    }
} 