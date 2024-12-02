import { DataBaseCarrito } from './dataBaseCarrito.js';

export class Carrito {
    static async anadirProductoCarrito(producto) {
        const db = await DataBaseCarrito.openDatabase();
        await DataBaseCarrito.insertProduct(db, producto);
        await this.actualizarCabeceraCarrito();
        db.close();
    }

    static async actualizarCabeceraCarrito() {
        const db = await DataBaseCarrito.openDatabase();
        const productos = await DataBaseCarrito.getAllProducts(db);
        const textoCesta = document.getElementById('textoCesta');
        textoCesta.textContent = `Cesta de la compra (${productos.length})`;
        db.close();
    }

    static async eliminarProductoCarrito(productoDB, trProducto) {
        const db = await DataBaseCarrito.openDatabase();
        await DataBaseCarrito.deleteProduct(db, productoDB.idDB);
        trProducto.remove();
        await this.actualizarCabeceraCarrito();
        this.calcularPrecioFinal();
        db.close();
    }

    static calcularPrecioFinal() {
        const tabla = document.querySelector('table');
        const filas = tabla.querySelectorAll('tr:not(:last-child)');
        let total = 0;

        filas.forEach(fila => {
            const precio = parseFloat(fila.querySelector('td:nth-child(3)').textContent);
            if (!isNaN(precio)) {
                total += precio;
            }
        });

        const ultimaFila = tabla.querySelector('tr:last-child');
        if (ultimaFila) {
            ultimaFila.remove();
        }

        const trTotal = document.createElement('tr');
        trTotal.innerHTML = `
            <td colspan="2" class="text-end"><strong>Total:</strong></td>
            <td colspan="2"><strong>${total.toFixed(2)}€</strong></td>
        `;
        tabla.appendChild(trTotal);
    }
} 