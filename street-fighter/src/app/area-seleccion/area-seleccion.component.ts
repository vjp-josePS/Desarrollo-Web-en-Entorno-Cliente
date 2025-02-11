import { Component, OnInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CargarLuchadoresService } from '../cargar-luchadores.service';
import { ILuchador } from '../interfaces/luchador.interface';
import { RetratoLuchadorComponent } from '../retrato-luchador/retrato-luchador.component';
import { AtributosLuchadorComponent } from '../atributos-luchador/atributos-luchador.component';

@Component({
  selector: 'app-area-seleccion', // Selector para usar este componente en otros templates
  standalone: true, // Indica que es un componente independiente (Angular 14+)
  imports: [CommonModule, RetratoLuchadorComponent, AtributosLuchadorComponent], // Importa los módulos y componentes que usa este componente
  templateUrl: './area-seleccion.component.html', // Define la ruta al archivo HTML del template
  styleUrls: ['./area-seleccion.component.css'] // Define la ruta al archivo CSS de estilos
})
export class AreaSeleccionComponent implements OnInit { // Clase del componente
  luchadores: ILuchador[] = []; // Array para almacenar la lista de luchadores (tipo ILuchador)
  indiceSeleccionado: number = -1; // Índice del luchador seleccionado (-1 indica que ninguno está seleccionado)
  numLuchadoresPorFila: number = 2; // Ajusta según tu diseño

  constructor(private cargarLuchadoresService: CargarLuchadoresService) {} // Inyecta el servicio CargarLuchadoresService

  ngOnInit() { // Método del ciclo de vida que se ejecuta al inicializar el componente
    this.luchadores = this.cargarLuchadoresService.getLuchadores(); // Obtiene la lista de luchadores del servicio
  }

  seleccionarLuchador(indice: number) { // Método para seleccionar un luchador por su índice
    if (this.indiceSeleccionado === indice) { // Si el luchador ya está seleccionado
      this.indiceSeleccionado = -1; // Deselecciona el luchador
    } else { // Si el luchador no está seleccionado
      this.indiceSeleccionado = indice; // Selecciona el luchador
    }
  }

  @HostListener('window:keydown', ['$event']) // Escucha eventos de teclado en la ventana
  manejarEventoTeclado(event: KeyboardEvent) { // Método para manejar los eventos de teclado
    switch (event.key) { // Evalúa la tecla presionada
      case 'ArrowLeft': // Si es la flecha izquierda
        this.moverSeleccion(-1); // Mueve la selección un lugar a la izquierda
        break;
      case 'ArrowRight': // Si es la flecha derecha
        this.moverSeleccion(1); // Mueve la selección un lugar a la derecha
        break;
      case 'ArrowUp': // Si es la flecha arriba
        this.moverSeleccion(-this.numLuchadoresPorFila); // Mueve la selección un número de luchadores por fila hacia arriba
        break;
      case 'ArrowDown': // Si es la flecha abajo
        this.moverSeleccion(this.numLuchadoresPorFila); // Mueve la selección un número de luchadores por fila hacia abajo
        break;
      case 'Enter': // Si es la tecla Enter
        if (this.indiceSeleccionado !== -1) { // Si hay un luchador seleccionado
          this.seleccionarLuchador(this.indiceSeleccionado); // Simula el click
        }
        break;
    }
  }

  moverSeleccion(delta: number) { // Método para mover la selección de luchador
    let nuevoIndice = this.indiceSeleccionado + delta; // Calcula el nuevo índice

    // Manejo de límites
    if (nuevoIndice < 0) { // Si el nuevo índice es menor que 0
      nuevoIndice = this.luchadores.length - 1; // Vuelve al último luchador
    } else if (nuevoIndice >= this.luchadores.length) { // Si el nuevo índice es mayor o igual que la longitud del array
      nuevoIndice = 0; // Vuelve al primer luchador
    }

    this.indiceSeleccionado = nuevoIndice; // Actualiza el índice seleccionado
  }
}


/*
Este componente actúa como el "área de selección" principal. Gestiona la lista de luchadores, el luchador actualmente seleccionado, y la lógica para la selección con el teclado. También se encarga de cargar los luchadores desde el servicio CargarLuchadoresService y de comunicarse con los componentes RetratoLuchadorComponent y AtributosLuchadorComponent para mostrar la información de los luchadores.
*/