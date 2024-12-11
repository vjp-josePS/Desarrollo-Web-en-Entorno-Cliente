class Producto {
    static devolverTRProductoDB(productoDB) {
        return `
            <tr>
                <td>${productoDB.item || '-'}</td>
                <td>${productoDB.cantidad || '-'}</td>
                <td>${productoDB.precioUnidad || '-'}</td>
                <td>${productoDB.marca || '-'}</td>
            </tr>
        `;
    }
} 