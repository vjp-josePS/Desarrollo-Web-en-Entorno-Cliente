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

// d)

var obraTeatro = {
    titulo: "el lazarillo de tormes",
    fechaLanzamiento: 1554,
    actores:[
        {
            nombreactor: "Juan",
            edad: 24,
            nActuaciones: 3,
        },
        {
            nombreactor: "Hugo",
            edad: 20,
            nActuaciones: 4,
        },
        {
            nombreactor: "Ruben",
            edad: 28,
            nActuaciones: 5,
        },
    ],
    director: {
            nombre: "Alfonso de Valdés",
            obras:[
                {titulo: "el lazarillo de tormes",},
                {titulo: "el lazarillo de juan",},
                {titulo: "el lazarillo de nacho",},
            ]
        },

        getInfo(){
            return "Título de la obra: " + this.titulo + 
            "\nFecha de lanzamiento: " + this.fechaLanzamiento + 
            "\nDirector: " + this.director.nombre + 
            "\nActores: " + 
            "\nNombre: " + this.actores[0].nombreactor + "\nEdad: " + this.actores[0].edad + "\nNúmero de apariciones: " + this.actores[0].nActuaciones + ".\n" + 
            "\nNombre: " + this.actores[1].nombreactor + "\nEdad: " + this.actores[1].edad + "\nNúmero de apariciones: " + this.actores[1].nActuaciones + ".\n" + 
            "\nNombre: " + this.actores[2].nombreactor + "\nEdad: " + this.actores[2].edad + "\nNúmero de apariciones: " + this.actores[2].nActuaciones + ".\n" + 
            "\nOtras obras del director: " + this.director.obras[0].titulo + ", " + this.director.obras[1].titulo + " y " + this.director.obras[2].titulo + "."
        }
}

console.log(obraTeatro.getInfo());