/*Crea un mapa que guarde Estudiantes (cadena con el nombre) -->[notas de las asignaturas] (un array de 6 posiciones con números). Al menos 4 estudiantes. (3 funciones):
a- Pinta por pantalla el nombre de cada estudiante con su media académica. Crea la función mediaAritmetica que tenga como entrada enteros con cualquier número de elementos.
b- Pinta al final quién es el estudiante con mejor media y cuál es esa media.
c- Pinta los nombres de todos los estudiantes ordenados por su media. */

function mediaAritmetica(notas){
    const suma = notas.reduce((total, nota) => total + nota, 0);

    return suma / notas.length;
}

function Estudiante(nombre, notas){
    this.nombre = nombre;
    this.notas = notas;
    this.media = mediaAritmetica(notas);
}

const estudiantes = [
    new Estudiante('Jose', [5, 6, 7, 8, 9]),
    new Estudiante('Juan', [5, 6, 6, 8, 9]),
    new Estudiante('Hugo', [5, 7, 7, 8, 9]),
    new Estudiante('Nacho', [7, 8, 8, 8, 9])
];

function estudiantesYMedias(estudiantes) {
    estudiantes.forEach(estudiante => {
        console.log(`${estudiante.nombre}: ${estudiante.media}`);
    });
}

function mejorEstudiante(estudiantes){
    return estudiantes.reduce((mejorEstudiante, estudianteActual) => {return estudianteActual.media > mejorEstudiante.media ? estudianteActual : mejorEstudiante;});
}

function ordenarPorMedia(estudiantes){
    return estudiantes.sort((a, b) => b.media - a.media);
}

estudiantesYMedias(estudiantes);

const mjEstudiante = mejorEstudiante(estudiantes);
console.log(`El mejor estudiante es ${mjEstudiante.nombre} con una media de ${mjEstudiante.media}`);

const estudiantesOrd = ordenarPorMedia(estudiantes);
console.log('Estudiantes ordenados por media: ');
estudiantesYMedias(estudiantesOrd);