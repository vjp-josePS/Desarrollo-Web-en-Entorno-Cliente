/*
El ejercicio consiste en hacer un buscador de información de jugadores de la NBA. Para ello tendrás que explorar la API https://www.balldontlie.io/#getting-started donde se encuentra alojada información sobre equipos, jugadores y estadísticas de la NBA.

En nuestro caso sólo nos interesa buscar aquellos jugadores que desee el usuario.

PARA TENER EN CUENTA:

1- Es necesario estructurar la aplicación de manera similar a la tarea4, creado una clase Jugador que tenga un método que permita devolver un div que represente al jugador.

2- La interfaz es libre, pero recomiendo que practiquéis con FLEX. La documentación recomendada es: https://github.com/yoksel/flex-cheatsheet/

3- Para crear el Spinner puedes usar la siguiente web con spinners 100% css: https://loading.io/css/ Recuerda que el spinner debe funcionar mientras se esté procesando la petición por fetch.
*/

class Jugador {
    constructor(data) {
        this.id = data.id;
        this.firstName = data.first_name;
        this.lastName = data.last_name;
        this.team = data.team ? data.team.full_name : 'Sin equipo';
    }

    toDiv() {
        const div = document.createElement('div');
        div.classList.add('player-card');
        div.innerHTML = `
            <h5>${this.firstName} ${this.lastName}</h5>
            <p>Equipo: ${this.team}</p>
        `;
        return div;
    }
}

document.getElementById('searchButton').addEventListener('click', async () => {
    const searchInput = document.getElementById('searchInput').value;
    const playerContainer = document.getElementById('playerContainer');
    const spinner = document.getElementById('spinner');

    // Mostrar el spinner
    spinner.classList.remove('d-none');
    playerContainer.innerHTML = ''; // Limpiar resultados anteriores

    try {
        const response = await fetch(`https://api.balldontlie.io/v1/players/<${searchInput}>`);
        const data = await response.json();

        if (data.data.length === 0) {
            playerContainer.innerHTML = '<p>No se encontraron jugadores.</p>';
        } else {
            data.data.forEach(playerData => {
                const player = new Jugador(playerData);
                playerContainer.appendChild(player.toDiv());
            });
        }
    } catch (error) {
        console.error('Error fetching data:', error);
        playerContainer.innerHTML = '<p>Error al buscar jugadores.</p>';
    } finally {
        // Ocultar el spinner
        spinner.classList.add('d-none');
    }
});