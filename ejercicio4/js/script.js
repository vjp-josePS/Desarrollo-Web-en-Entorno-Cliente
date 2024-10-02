/*Crea una función que recibe 3 parámeetros con valores por defecto (producto -> "Producto genérico", precio -> 100, impuestos -> 21). La función convierte las entradas a cadena, entero y entero. Si no se pudiesen convertir las entradas, devolvería los valores por defecto. Prueba esta función varias veces, omitiendo valores y poniendo valores incorrectos.*/

function crearProducto(producto, precio, impuesto){
    let resultado = [];

    resultado.producto = producto;
    resultado.precio = precio;
    resultado.impuesto = impuesto;

    if (resultado.producto == null) {
        console.log('null');
    }else if (resultado.producto == 'string') {
        resultado.producto = false;
    }else{
        console.log(`Producto: ` + resultado.producto);
    }

    if (resultado.precio == null) {
        resultado.precio = 0;
    }else if (resultado.precio == 'number') {
        resultado.precio = 0;
    }

    if (resultado.impuesto == null) {
        resultado.impuesto = 0;
    }else if (resultado.impuesto == 'number') {
        resultado.impuesto = 0;
    }else{
        console.log(`Impuesto: ` + resultado.impuesto);
    }

    return console.log('El producto es ' + resultado.producto + ', el precio es ' + resultado.precio + ' y su impuesto es ' + resultado.impuesto);
}

console.log("Prueba 1:");
console.log("");

crearProducto();

console.log("Prueba 2:");
console.log("");

crearProducto("Camisa", 50, 15);

console.log("Prueba 3:");
console.log("");

crearProducto(null, "cuarenta", "veinte");

console.log("Prueba 4:");
console.log("");

crearProducto(undefined, 75, 25);

console.log("Prueba 5:");
console.log("");

crearProducto(true, false, null);

console.log("Prueba 6:");
console.log("");
crearProducto([], "", ``);