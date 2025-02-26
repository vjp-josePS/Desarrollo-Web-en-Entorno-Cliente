import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ILuchador } from '../interfaces/luchador.interface';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-antes-luchar',
  templateUrl: './antes-luchar.component.html',
  styleUrls: ['./antes-luchar.component.css']
})
export class AntesLucharComponent implements OnInit {

  // Propiedades para almacenar los luchadores
  luchadorSeleccionado: ILuchador | undefined;
  luchadorAleatorio: ILuchador | undefined;
  luchadores: ILuchador[] = [];

  constructor(private router: Router, private http: HttpClient) { }

  ngOnInit() {
    // Al inicializar el componente, obtiene los luchadores y selecciona uno aleatorio
    this.getLuchadores().subscribe(data => {
      this.luchadores = data.luchadores;
      this.luchadorSeleccionado = this.getLuchadorSeleccionado();
      this.luchadorAleatorio = this.getLuchadorAleatorio();
    });
  }

  // Método para obtener los luchadores del servidor
  getLuchadores(): Observable<{ luchadores: ILuchador[] }> { // Ajusta el tipo de retorno
    return this.http.get<{ luchadores: ILuchador[] }>('http://localhost:3000/luchadores');
  }

  // Método para obtener el luchador seleccionado del localStorage
  getLuchadorSeleccionado(): ILuchador | undefined {
    if (typeof localStorage !== 'undefined') {
      const luchadorSeleccionadoString = localStorage.getItem('luchadorSeleccionado');
      if (luchadorSeleccionadoString) {
        const luchadorSeleccionado = JSON.parse(luchadorSeleccionadoString) as ILuchador;
        return luchadorSeleccionado;
      }
    }
    return undefined;
  }

  // Método para seleccionar un luchador aleatorio
  getLuchadorAleatorio(): ILuchador {
    const indiceAleatorio = Math.floor(Math.random() * this.luchadores.length);
    return this.luchadores[indiceAleatorio];
  }

  // Método para iniciar la pelea (navega a la ruta '/pelea')
  iniciarPelea() {
    this.router.navigate(['/pelea']);
  }
}
