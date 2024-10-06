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
*/

function crearMazo() {
    const palos = ['Corazones', 'Picas', 'Tréboles', 'Diamantes'];
    const valores = ['As', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jota', 'Reina', 'Rey'];
    const mazo = [];

    palos.forEach(palo => {
        valores.forEach(valor => {
            mazo.push([palo, valor]);
        });
    });

    return mazo;
}

function barajarMazo(mazo) {
    for (let i = mazo.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [mazo[i], mazo[j]] = [mazo[j], mazo[i]];
    }
    return mazo;
}

function calcularValorMano(mano) {
    let valor = 0;
    let ases = 0;

    mano.forEach(carta => {
        if (carta[1] === 'As') {
            ases++;
            valor += 11;
        } else if (['Jota', 'Reina', 'Rey'].includes(carta[1])) {
            valor += 10;
        } else {
            valor += carta[1];
        }
    });

    while (valor > 21 && ases > 0) {
        valor -= 10;
        ases--;
    }

    return valor;
}

function turnoJugador(mazo) {
    const manoJugador = [];
    while (true) {
        const carta = mazo.pop();
        manoJugador.push(carta);
        console.log(`Tu carta: ${carta[1]} de ${carta[0]}`);

        const valorMano = calcularValorMano(manoJugador);
        console.log(`Tu puntuación: ${valorMano}`);

        if (valorMano > 21) {
            console.log("¡Te has pasado de 21! Has perdido.");
            return manoJugador;
        }

        const pedirCarta = prompt("¿Quieres pedir otra carta? (S/N)");
        if (pedirCarta.toUpperCase() !== 'S') {
            break;
        }
    }
    return manoJugador;
}

function turnoMaquina(mazo, valorJugador) {
    const manoMaquina = [];
    while (calcularValorMano(manoMaquina) < valorJugador && calcularValorMano(manoMaquina) <= 17) {
        const carta = mazo.pop();
        manoMaquina.push(carta);
    }
    return manoMaquina;
}

function pintarInfoFinalJuego(cartasJugador, cartasMaquina) {
    const valorJugador = calcularValorMano(cartasJugador);
    const valorMaquina = calcularValorMano(cartasMaquina);

    console.log("Tus cartas:", cartasJugador);
    console.log("Tus puntos:", valorJugador);
    console.log("Cartas de la máquina:", cartasMaquina);
    console.log("Puntos de la máquina:", valorMaquina);

    if (valorMaquina > 21 || valorJugador > valorMaquina) {
        console.log("¡Has ganado!");
    } else if (valorJugador === valorMaquina) {
        console.log("¡Empate!");
    } else {
        console.log("¡La máquina ha ganado!");
    }
}

while (prompt("¿Quieres jugar al Blackjack? (S/N)") === "S") {
    const mazo = barajarMazo(crearMazo());
    const cartasJugador = turnoJugador(mazo);
    const valorJugador = calcularValorMano(cartasJugador);

    if (valorJugador <= 21) {
        const cartasMaquina = turnoMaquina(mazo, valorJugador);
        pintarInfoFinalJuego(cartasJugador, cartasMaquina);
    }
}