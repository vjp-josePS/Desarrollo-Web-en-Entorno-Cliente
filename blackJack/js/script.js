/*BLACKJACK: Crea un programa que simule un juego de blackJack. Debes considerear las siguientes características:
- Cada carta se representa como un array de dos posiciones, en la primera posición se guarda el palo y en la segunda posición el valor. Los palos son "Corazones", "Picas", "Tréboles" y "Diamantes". Los valores posibles para las cartas son: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 (valores normales) y las figuras "Jota", "Reina" y "Rey".
- Valores de las cartas: Las cartas naturales tienen su valor nominal excepto el 1 (AS) que puede valor 1 u 11, como desee el usuario. Las figuras valen 10.
- Objetivo del juego: En esta versión reducida, el jugador jugará contra la máquina. Habrá dos turnos, en el primero juega el jugador y en el siguiente la máquina. Procedemos a describir los pasos:
1) Se crea un array con todas las cartas posibles que tiene el juego (un array de arrays de dos dimensiones con 52 cartas).

Turno del jugador:
1) Con un menú, pide cartas(que salen aleatoriamente) hasta que considera que ya no quiere pedir más, el objetivo del juego es llegar a 21 puntos o lo más cercano, pero sin pasarse. Una vez termina de pedir cartas, se muestra su puntuación y comienza el turno de la máquina.

Turno de la máquina:
1) La máquina realizara el mismo procedimiento, pero automáticamente. Para de pedir cartas cuando su puntuación sobrepasa a la del jugador. En cuyo caso pueden ocurrir dos cosas:
    a) Supera la puntuación del jugador y se pasa de 21 puntos: El jugador gana.
    b) Supera la puntuación del jugador y tienen 21 puntos o menos: La máquina gana.
    
Pistas para estructurar el juego:

    function blackJack(){
        console.log("Creando el mazo...");
        let mazo = construirMazo();
    } */