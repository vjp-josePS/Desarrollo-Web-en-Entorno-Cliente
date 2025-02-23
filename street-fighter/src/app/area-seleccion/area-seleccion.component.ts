import { Component, OnInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ILuchador } from '../interfaces/luchador.interface';
import { RetratoLuchadorComponent } from '../retrato-luchador/retrato-luchador.component';
import { AtributosLuchadorComponent } from '../atributos-luchador/atributos-luchador.component';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-area-seleccion',
  standalone: true,
  imports: [CommonModule, RetratoLuchadorComponent, AtributosLuchadorComponent],
  templateUrl: './area-seleccion.component.html',
  styleUrls: ['./area-seleccion.component.css']
})
export class AreaSeleccionComponent implements OnInit {
  luchadores: ILuchador[] = [];
  indiceSeleccionado: number = -1;
  numLuchadoresPorFila: number = 2; // Ajusta según tu diseño

  constructor(private http: HttpClient,  private router: Router) { }

  ngOnInit() {
    // Obtiene los luchadores al inicializar el componente
    this.getLuchadores().subscribe(data => {
      this.luchadores = data;
    });
  }

  // Método para obtener los luchadores del servidor
  getLuchadores(): Observable<ILuchador[]> {
    return this.http.get<ILuchador[]>('http://localhost:3000/luchadores');
  }

  // Método para seleccionar o deseleccionar un luchador
  seleccionarLuchador(indice: number) {
    if (this.indiceSeleccionado === indice) {
      this.indiceSeleccionado = -1; // Deseleccionar
    } else {
      this.indiceSeleccionado = indice; // Seleccionar nuevo
    }
  }

  // Listener para manejar eventos de teclado
  @HostListener('window:keydown', ['$event'])
  manejarEventoTeclado(event: KeyboardEvent) {
    switch (event.key) {
      case 'ArrowLeft':
        this.moverSeleccion(-1);
        break;
      case 'ArrowRight':
        this.moverSeleccion(1);
        break;
      case 'ArrowUp':
        this.moverSeleccion(-this.numLuchadoresPorFila);
        break;
      case 'ArrowDown':
        this.moverSeleccion(this.numLuchadoresPorFila);
        break;
      case 'Enter':
        if (this.indiceSeleccionado !== -1) {
          this.seleccionarLuchador(this.indiceSeleccionado); // Simula el click
        }
        break;
    }
  }

  // Método para mover la selección
  moverSeleccion(delta: number) {
    let nuevoIndice = this.indiceSeleccionado + delta;

    // Manejo de límites
    if (nuevoIndice < 0) {
      nuevoIndice = this.luchadores.length - 1; // Vuelve al último luchador
    } else if (nuevoIndice >= this.luchadores.length) {
      nuevoIndice = 0; // Vuelve al primer luchador
    }

    this.indiceSeleccionado = nuevoIndice;
  }

  // Método para seleccionar un luchador y navegar a la pantalla de lucha
  seleccionarYLuchar() {
    if (this.indiceSeleccionado !== -1) {
      // Guardar el luchador seleccionado en el LocalStorage
      localStorage.setItem('luchadorSeleccionado', this.luchadores[this.indiceSeleccionado].nombre);
      // Navegar al componente "antes-luchar"
      this.router.navigate(['/antes-luchar']);
    } else {
      alert('Por favor, selecciona un luchador antes de continuar.');
    }
  }
}
