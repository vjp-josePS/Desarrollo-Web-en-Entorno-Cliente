import { Carrito } from './carrito.js';

export class Producto {
    static getDivFromProducto(producto) {
        const div = document.createElement('div');
        div.className = 'producto-card';
        
        const tituloTruncado = producto.titulo.length > 50 
            ? producto.titulo.substring(0, 47) + '...' 
            : producto.titulo;

        div.innerHTML = `
            <img src="${producto.foto}" alt="${producto.titulo}" 
                 onerror="this.src='https://via.placeholder.com/300x200?text=Imagen+no+disponible'">
            <h3>${tituloTruncado}</h3>
            <div class="precio">Precio: ${producto.precio}€</div>
            <button class="btn-comprar" data-id="${producto.id}">Comprar</button>
        `;

        div.querySelector('.btn-comprar').addEventListener('click', async () => {
            try {
                await Carrito.anadirProductoCarrito(producto);
            } catch (error) {
                console.error('Error al añadir al carrito:', error);
            }
        });

        return div;
    }

    static getTrFromProductoBD(productoBD) {
        const tr = document.createElement('tr');
        
        tr.innerHTML = `
            <td><img src="${productoBD.foto}" alt="${productoBD.titulo}" style="width: 50px;"></td>
            <td>${productoBD.titulo}</td>
            <td>${productoBD.precio}€</td>
            <td>
                <button class="btn btn-danger btn-sm btn-eliminar">Eliminar</button>
            </td>
        `;

        const btnEliminar = tr.querySelector('.btn-eliminar');
        btnEliminar.addEventListener('click', async () => {
            try {
                await Carrito.eliminarProductoCarrito(productoBD, tr);
            } catch (error) {
                console.error('Error al eliminar:', error);
            }
        });

        return tr;
    }
} 