'use strict';

let nombreBD = 'Productos';
let versionDB = 1;
let almacen = 'AlmacenProductos';
let db = null;

class ManejadorDB {
    static abrirDB() {
        return new Promise((resolve, reject) => {
            let peticion = indexedDB.open(nombreBD, versionDB);

            peticion.onerror = () => {
                reject('Error al abrir BD');
            };

            peticion.onupgradeneeded = (evento) => {
                db = evento.target.result;
                let almacenObjetos = db.createObjectStore(almacen, { keyPath: 'id', autoIncrement: true });
            };

            peticion.onsuccess = (evento) => {
                db = evento.target.result;
                resolve(db);
            };
        });
    }

    static obtenerTodosLosProductos() {
        return new Promise((resolve, reject) => {
            let transaccion = db.transaction([almacen], 'readonly');
            let almacenObjetos = transaccion.objectStore(almacen);
            let peticion = almacenObjetos.getAll();

            peticion.onerror = () => {
                reject('Error al obtener productos');
            };

            peticion.onsuccess = () => {
                resolve(peticion.result);
            };
        });
    }

    static insertarProducto(producto) {
        return new Promise((resolve, reject) => {
            let transaccion = db.transaction([almacen], 'readwrite');
            let almacenObjetos = transaccion.objectStore(almacen);
            let peticion = almacenObjetos.add(producto);

            peticion.onerror = () => {
                reject('Error al insertar producto');
            };

            peticion.onsuccess = () => {
                resolve(true);
            };
        });
    }

    static eliminarDB() {
        return new Promise((resolve, reject) => {
            let peticion = indexedDB.deleteDatabase(nombreBD);

            peticion.onerror = () => {
                reject('Error al eliminar BD');
            };

            peticion.onsuccess = () => {
                resolve(true);
            };
        });
    }
} 