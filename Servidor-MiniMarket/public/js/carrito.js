import { DataBaseCarrito } from './dataBaseCarrito.js';
import { Producto } from './producto.js';

export class Carrito {
    static async anadirProductoCarrito(producto) {
        try {
            const db = await DataBaseCarrito.openDatabase();
            await DataBaseCarrito.insertProduct(db, producto);
            await this.actualizarCabeceraCarrito();
            db.close();
            alert('Producto añadido al carrito');
        } catch (error) {
            console.error('Error al añadir al carrito:', error);
            alert('Error al añadir el producto al carrito');
        }
    }

    static async actualizarCabeceraCarrito() {
        try {
            const db = await DataBaseCarrito.openDatabase();
            const productos = await DataBaseCarrito.getAllProducts(db);
            const textoCesta = document.getElementById('textoCesta');
            if (textoCesta) {
                textoCesta.textContent = `Cesta de la compra (${productos.length})`;
            }
            db.close();
        } catch (error) {
            console.error('Error al actualizar cabecera:', error);
        }
    }

    static async eliminarProductoCarrito(productoBD, trProducto) {
        try {
            const db = await DataBaseCarrito.openDatabase();
            await DataBaseCarrito.deleteProduct(db, productoBD.idDB);
            trProducto.remove();
            await this.actualizarCabeceraCarrito();
            this.calcularPrecioFinal();
            db.close();
            
            // Verificar si el carrito está vacío
            const tbody = document.querySelector('#tabla-carrito tbody');
            if (tbody && !tbody.children.length) {
                document.querySelector('.tabla-carrito table').classList.add('d-none');
                document.querySelector('.btn-finalizar').classList.add('d-none');
                document.getElementById('carrito-vacio').classList.remove('d-none');
            }
        } catch (error) {
            console.error('Error al eliminar producto:', error);
            alert('Error al eliminar el producto');
        }
    }

    static calcularPrecioFinal() {
        const tabla = document.querySelector('#tabla-carrito');
        if (!tabla) return;

        const filas = tabla.querySelectorAll('tbody tr');
        let total = 0;

        filas.forEach(fila => {
            const precioTexto = fila.querySelector('td:nth-child(3)')?.textContent;
            if (precioTexto) {
                const precio = parseFloat(precioTexto.replace('€', ''));
                if (!isNaN(precio)) {
                    total += precio;
                }
            }
        });

        let trTotal = tabla.querySelector('tfoot tr');
        if (!trTotal) {
            const tfoot = tabla.querySelector('tfoot') || tabla.appendChild(document.createElement('tfoot'));
            trTotal = document.createElement('tr');
            tfoot.appendChild(trTotal);
        }

        trTotal.innerHTML = `
            <td colspan="2" class="text-end"><strong>Total:</strong></td>
            <td colspan="2"><strong>${total.toFixed(2)}€</strong></td>
        `;
    }

    static async cargarProductosEnCesta() {
        try {
            const db = await DataBaseCarrito.openDatabase();
            const productos = await DataBaseCarrito.getAllProducts(db);
            const contenedor = document.querySelector('#tabla-carrito tbody');
            
            if (contenedor) {
                contenedor.innerHTML = '';
                productos.forEach(producto => {
                    const tr = Producto.getTrFromProductoBD(producto);
                    contenedor.appendChild(tr);
                });
                this.calcularPrecioFinal();

                // Mostrar/ocultar elementos según si hay productos
                const hayProductos = productos.length > 0;
                document.querySelector('.tabla-carrito table').classList.toggle('d-none', !hayProductos);
                document.querySelector('.btn-finalizar').classList.toggle('d-none', !hayProductos);
                document.getElementById('carrito-vacio').classList.toggle('d-none', hayProductos);
            }
            
            db.close();
        } catch (error) {
            console.error('Error al cargar productos:', error);
        }
    }
} 