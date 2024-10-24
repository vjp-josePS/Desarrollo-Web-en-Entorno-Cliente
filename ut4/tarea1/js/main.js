// a)

var disco = {
    titulo: "disco1",
    autor: "huguito",
    anho: 2004,
    nVentas: 2000,

    getInfo(){
        return "El disco " + this.disco + " con autor " + this.autor + " creado el año " + this.anho + " con un total de ventas de " + this.nVentas + ".";
    }
};

console.log(disco.getInfo());

// b)

var ciudad = {
    calle: "Miguel Hernández",
    longitud: 200,
    lista:[
        {
            nombre: "bar Manolo",
        },
        {
            nombre: "panaderia Paqui palla",
        },
        {
            nombre: "ferreteria Alfredo",
        }
        
    ],

    getInfo(){
        return info = "La calle se llama " + this.calle + ", tiene una longitud de " + this.longitud + "m, y los establecimientos que hay son: " + this.lista[0].nombre + ", " + this.lista[1].nombre + " y " + this.lista[2].nombre;
    }
};

console.log(ciudad.getInfo());


// c)

var coche = {
    modelo: "huayra",
    duenho:[
        {
            nombre: "hugo",
            edad: 20,
        }
    ],

    marca:[
        {
            nombre: "pagani",
            creacionMarca: 1992,
        }
    ],

    getInfo(){
        return "modelo: " + this.modelo + "\nDueño: " + this.duenho[0].nombre + "\nEdad: " + this.duenho[0].edad + "\nMarca: " + this.marca[0].nombre + "\nCreación de la marca: " + this.marca[0].creacionMarca;
    }
}

console.log(coche.getInfo());