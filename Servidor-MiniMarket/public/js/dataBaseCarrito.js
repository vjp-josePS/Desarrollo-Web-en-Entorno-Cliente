export class DataBaseCarrito {
    static openDatabase() {
        return new Promise((resolve, reject) => {
            const openReq = indexedDB.open('Cesta', 1);

            openReq.addEventListener('upgradeneeded', e => {
                const db = e.target.result;
                if (!db.objectStoreNames.contains('products')) {
                    db.createObjectStore('products', {autoIncrement: true, keyPath: 'idDB'});
                }
            });

            openReq.addEventListener('success', e => resolve(e.target.result));
            openReq.addEventListener('error', () => reject('Error al abrir BD'));
            openReq.addEventListener('blocked', () => reject('BD bloqueada'));
        });
    }

    static getAllProducts(db) {
        return new Promise((resolve, reject) => {
            const transaction = db.transaction(['products'], 'readonly');
            const store = transaction.objectStore('products');
            const request = store.getAll();

            request.addEventListener('success', () => resolve(request.result));
            request.addEventListener('error', () => reject('Error al obtener productos'));
        });
    }

    static insertProduct(db, producto) {
        return new Promise((resolve, reject) => {
            const transaction = db.transaction(['products'], 'readwrite');
            const store = transaction.objectStore('products');
            const request = store.add(producto);

            request.addEventListener('success', () => resolve(request.result));
            request.addEventListener('error', () => reject('Error al insertar producto'));
        });
    }

    static deleteProduct(db, key) {
        return new Promise((resolve, reject) => {
            const transaction = db.transaction(['products'], 'readwrite');
            const store = transaction.objectStore('products');
            const request = store.delete(key);

            request.addEventListener('success', () => resolve());
            request.addEventListener('error', () => reject('Error al eliminar producto'));
        });
    }
} 